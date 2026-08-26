import { Component } from '@angular/core';

@Component({
  selector: 'app-no-content',
  template: `
    <div class="row">
      <div class="col-md-12">
        <h1>{{ 'noContent.title' | t }}</h1>
        <p>{{ 'noContent.message' | t }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class NoContentComponent {
  constructor() {}
}
