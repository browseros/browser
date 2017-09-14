
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IApp } from '../../models/app.model';
import { ITab } from '../../models/tab.model';

@Component({
    selector: 'app-bar',
    styleUrls: ['./app-bar.component.css'],
    templateUrl: './app-bar.component.html'
})

export class AppBarComponent {
    @Input() public currentApp: IApp;
    @Input() public currentTab: ITab;
    @Input() public apps: IApp[];
    @Output() public onBtnAddApp: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onAppSelect: EventEmitter<IApp> = new EventEmitter<IApp>();
    @Output() public onAppClose: EventEmitter<IApp> = new EventEmitter<IApp>();
}
