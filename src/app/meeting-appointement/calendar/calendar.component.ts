import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Schedule } from '../models/schedule';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  selectedDate = new Date();
  @Output() date: EventEmitter<Schedule> = new EventEmitter<Schedule>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onDataChanged(event: any): void {
    const date = new Date(event.target.value);
    const shedule = new Schedule(0, date.getFullYear(), date.getDate(), date.getMonth() + 1, 0);
    this.date.emit(shedule)
  }

 


}
