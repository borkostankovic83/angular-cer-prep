import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheduleComponent } from './shedule/shedule.component';
import { DevelopersComponent } from './developers/developers.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AviabilityScreenComponent } from './aviability-screen/aviability-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SheduleComponent,
    DevelopersComponent,
    CalendarComponent,
    AviabilityScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MeetingAppointementModule { }
