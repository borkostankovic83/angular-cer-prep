import { Component, OnInit } from '@angular/core';
import { Develepers } from '../models/develepers';
import { Schedule } from '../models/schedule';

@Component({
  selector: 'app-aviability-screen',
  templateUrl: './aviability-screen.component.html',
  styleUrls: ['./aviability-screen.component.css']
})
export class AviabilityScreenComponent implements OnInit {

  dev: Develepers = {} as Develepers;
  schedule: Schedule = {} as Schedule;

  constructor() { }

  ngOnInit(): void {
  }

  onDataChanged(event: any): void {
    this.dev = event;
  }

  onDateChanged(event: any): void {
    this.schedule = event;
  }

}
