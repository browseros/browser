import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 