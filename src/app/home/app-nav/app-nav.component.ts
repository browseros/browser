
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IApp } from '../../models/app.model';

@Component({
    selector: 'app-nav',
    styleUrls: ['./app-nav.component.css'],
    templateUrl: './app-nav.component.html'
})

export class AppNavComponent {

    @Input() public currentApp: IApp;
    @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

    public show(): void {
        $('#app-search')['modal']('show');
    }

    public hide(): void {
        $('#app-search')['modal']('hide');
    }
}
