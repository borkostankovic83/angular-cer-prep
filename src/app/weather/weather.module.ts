import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { DisplayWeaterComponent } from './display-weater/display-weater.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WeatherComponent,
    DisplayWeaterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WeatherModule { }
