import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <h2>Welcome to Browser OS</h2>
      <p>This is the home page</p>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {
    console.log('[HomeComponent] Constructor called');
  }

  ngOnInit() {
    console.log('[HomeComponent] ngOnInit called');
  }

  ngOnDestroy() {
    console.log('[HomeComponent] ngOnDestroy called');
  }
}
