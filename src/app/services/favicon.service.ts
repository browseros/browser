import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  // Lấy favicon lớn nhất từ một URL
  async getBestFavicon(url: string): Promise<string> {
    try {
      // 1. Lấy domain
      const domain = this.extractDomain(url);
      // 2. Fetch HTML
      const html = await fetch(url).then(res => res.text());
      // 3. Parse các link icon
      const iconLinks = this.parseIconLinks(html, url);
      if (iconLinks.length > 0) {
        // Ưu tiên icon có size lớn nhất
        iconLinks.sort((a, b) => (b.size || 0) - (a.size || 0));
        return iconLinks[0].href;
      }
      // 4. Thử lấy từ manifest.json
      const manifestUrl = this.getManifestUrl(html, url);
      if (manifestUrl) {
        const manifest = await fetch(manifestUrl).then(res => res.json());
        if (manifest.icons && manifest.icons.length > 0) {
          // Ưu tiên icon lớn nhất
          const sorted = manifest.icons.sort((a: any, b: any) => (b.sizes?.split('x')[0] || 0) - (a.sizes?.split('x')[0] || 0));
          return new URL(sorted[0].src, manifestUrl).toString();
        }
      }
      // 5. Fallback: Google S2
      return `https://www.google.com/s2/favicons?sz=128&domain_url=${domain}`;
    } catch (e) {
      // 6. Fallback cuối cùng: DuckDuckGo
      const domain = this.extractDomain(url);
      return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
    }
  }

  private extractDomain(url: string): string {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  }

  private parseIconLinks(html: string, baseUrl: string): { href: string, size?: number }[] {
    const links: { href: string, size?: number }[] = [];
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const linkElements = doc.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]');
    linkElements.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        let size = 0;
        const sizes = link.getAttribute('sizes');
        if (sizes) {
          const match = sizes.match(/(\d+)x(\d+)/);
          if (match) size = parseInt(match[1], 10);
        }
        links.push({ href: new URL(href, baseUrl).toString(), size });
      }
    });
    return links;
  }

  private getManifestUrl(html: string, baseUrl: string): string | null {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const manifest = doc.querySelector('link[rel="manifest"]');
    if (manifest) {
      const href = manifest.getAttribute('href');
      if (href) return new URL(href, baseUrl).toString();
    }
    return null;
  }
} 