
import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    styleUrls: ['./app-search.component.css'],
    templateUrl: './app-search.component.html'
})

export class AppSearchComponent {
    public show(): void {
        $('#app-search').modal('show');
    }
}
