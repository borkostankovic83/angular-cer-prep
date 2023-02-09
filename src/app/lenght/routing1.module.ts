import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LenghtComponent } from './lenght/lenght.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path:'lenght2', component: LenghtComponent },
    ]),
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModule1 { }
