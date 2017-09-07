
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    styleUrls: ['./app-search.component.css'],
    templateUrl: './app-search.component.html'
})

export class AppSearchComponent {

    @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

    public show(): void {
        $('#app-search')['modal']('show');
    }

    public hide(): void {
        $('#app-search')['modal']('hide');
    }
}
