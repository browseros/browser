import { Component } from '@angular/core';

@Component({
  selector: 'app-no-content',
  template: `
    <div class="row">
      <div class="col-md-12">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  `,
  styles: []
})
export class NoContentComponent {
  constructor() {}
}
