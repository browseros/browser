
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    styleUrls: ['./app-search.component.css'],
    templateUrl: './app-search.component.html'
})

export class AppSearchComponent {

    @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();
    private appSearch: string;

    public show(): void {
        this.appSearch = '';
        $('#app-search')['modal']('show');
        $('#app-search').on('shown.bs.modal', () => {
            $('#app-search-input').focus();
        });
    }

    public hide(): void {
        $('#app-search')['modal']('hide');
    }
}
