
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IWebEvent } from '../../models/web-event.model';
import { ITab } from '../../models/tab.model';
import { IApp } from '../../models/app.model';

@Component({
    selector: 'app-search',
    styleUrls: ['./app-search.component.css'],
    templateUrl: './app-search.component.html'
})

export class AppSearchComponent {

    @Input() public currentApp: IApp;
    @Input() public currentTab: ITab;
    @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onSearchReplacing: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    private appSearch: string;
    private newSearch: boolean = true;

    public show(oldUrl: string): void {
        this.newSearch = true;
        if (oldUrl) {
            this.newSearch = false;
        }
        this.appSearch = oldUrl;
        $('#app-search')['modal']('show');
        $('#app-search').on('shown.bs.modal', () => {
            $('#app-search-input').focus();
            $('#app-search-input').select();
        });
    }

    public hide(): void {
        $('#app-search')['modal']('hide');
    }

    private doSearch($event) {
        if (this.newSearch) {
            this.onSearch.emit($event);
            return;
        }
        let currentTab = JSON.parse(JSON.stringify(this.currentTab));
        let currentApp = JSON.parse(JSON.stringify(this.currentApp));
        let webEvent: IWebEvent = {
            tab: currentTab,
            eventValue: $event,
            app: currentApp,
            eventName: 'urlchanged'
        };
        this.onSearchReplacing.emit(webEvent);
    }
}
