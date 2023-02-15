import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LengthConverter } from './lengthConverter/lengthConverter.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { DisplayComponent } from './list/display/display.component';
import { DisplayWeaterComponent } from './weather/display-weater/display-weater.component';
import { DisplayBoardComponent } from './board/display-board/display-board.component';
import { AviabilityScreenComponent } from './meeting-appointement/aviability-screen/aviability-screen.component';
import { BookingComponent } from './booking/booking/booking.component';
import { RoomDetailsComponent } from './booking/room-details/room-details.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path:'', component: TemperatureConverterComponent },
      { path:'weather', component: DisplayWeaterComponent },
      { path:'shedule', component: AviabilityScreenComponent },
      { path:'lenght', component: LengthConverter },
      { path:'search', component: BookingComponent },
      { path:'room/:id', component: RoomDetailsComponent },
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
