import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AviabilityComponent } from './aviability/aviability.component';
import { RoomComponent } from './room/room.component';
import { FiltersComponent } from './filters/filters.component';
import { RoomDetailsComponent } from './room-details/room-details.component';



@NgModule({
  declarations: [
    BookingComponent,
    CalendarComponent,
    AviabilityComponent,
    RoomComponent,
    FiltersComponent,
    RoomDetailsComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
