
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IApp } from '../../models/app.model';
import { ITab } from '../../models/tab.model';

@Component({
    selector: 'app-nav',
    styleUrls: ['./app-nav.component.css'],
    templateUrl: './app-nav.component.html'
})

export class AppNavComponent {

    @Input() public currentApp: IApp;
    @Input() public tabs: ITab[];
    @Input() public currentTab: ITab;
    @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onNextClick: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onBackClick: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onGotoTab: EventEmitter<ITab> = new EventEmitter<ITab>();
    @Output() public onCloseTab: EventEmitter<ITab> = new EventEmitter<ITab>();
    @Output() public onContextMenu: EventEmitter<ITab> = new EventEmitter<ITab>();

    public show(): void {
        $('#app-search')['modal']('show');
    }

    public hide(): void {
        $('#app-search')['modal']('hide');
    }

    private onMouseUp($event, tab) {
        // middle button
        if ($event.button === 1) {
            this.onCloseTab.emit(tab);
        }
    }
}
