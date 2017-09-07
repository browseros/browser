
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav',
    styleUrls: ['./app-nav.component.css'],
    templateUrl: './app-nav.component.html'
})

export class AppNavComponent {

    @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

    public show(): void {
        $('#app-search')['modal']('show');
    }

    public hide(): void {
        $('#app-search')['modal']('hide');
    }
}
