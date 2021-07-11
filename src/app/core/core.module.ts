import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./components/errors/error404.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component
  ], 
  imports: [
    RouterModule.forChild([
      {
        path: '', redirectTo: '/courses', pathMatch: 'full'
      }, 
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule{ }