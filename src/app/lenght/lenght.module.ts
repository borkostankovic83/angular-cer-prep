import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenghtComponent } from './lenght/lenght.component';
import { RoutingModule1 } from './routing1.module';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    LenghtComponent
  ],
  imports: [
    RoutingModule1,
    CommonModule,
    MaterialModule
  ]
})
export class LenghtModule { }
