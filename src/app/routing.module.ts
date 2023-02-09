import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LengthConverter } from './lengthConverter/lengthConverter.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { DisplayComponent } from './list/display/display.component';
import { DisplayWeaterComponent } from './weather/display-weater/display-weater.component';
import { DisplayBoardComponent } from './board/display-board/display-board.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path:'', component: TemperatureConverterComponent },
      { path:'weather', component: DisplayWeaterComponent },
      { path:'lenght', component: LengthConverter },
      { path:'user-list', component: DisplayComponent },
      { path:'form', component: ReactiveFormComponent },
      { path:'board', component: DisplayBoardComponent },
      { path:'temperature', component: TemperatureConverterComponent }
    ]),
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModule { }
