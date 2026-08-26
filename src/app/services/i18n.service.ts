import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  LanguageCode,
  LanguageOption,
  SUPPORTED_LANGUAGES,
  translations
} from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly storageKey = 'browseros.language';
  private readonly currentLang$ = new BehaviorSubject<LanguageCode>(this.loadLanguage());

  readonly language$ = this.currentLang$.asObservable();
  readonly supportedLanguages: LanguageOption[] = SUPPORTED_LANGUAGES;

  constructor() {
    this.applyDocumentLang(this.currentLang$.value);
  }

  get language(): LanguageCode {
    return this.currentLang$.value;
  }

  setLanguage(lang: LanguageCode): void {
    if (!translations[lang]) {
      return;
    }
    localStorage.setItem(this.storageKey, lang);
    this.currentLang$.next(lang);
    this.applyDocumentLang(lang);
  }

  t(key: string, params?: Record<string, string | number>): string {
    const lang = this.currentLang$.value;
    let value = translations[lang][key] || translations.en[key] || key;
    if (params) {
      Object.keys(params).forEach(paramKey => {
        value = value.replace(
          new RegExp(`\\{\\{${paramKey}\\}\\}`, 'g'),
          String(params[paramKey])
        );
      });
    }
    return value;
  }

  private loadLanguage(): LanguageCode {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved === 'en' || saved === 'zh-CN') {
        return saved;
      }
    } catch {
      // Ignore storage errors and fall back to default
    }
    return 'en';
  }

  private applyDocumentLang(lang: LanguageCode): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'zh-CN' ? 'zh-CN' : 'en';
    }
  }
}
