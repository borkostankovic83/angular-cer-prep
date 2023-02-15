import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Schedule } from "../models/schedule";
import { Develepers } from '../models/develepers';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  developers: Develepers[] = [
    {
      "id": "1",
      "name": "Borko",
      "title": "Software Eng",
      "shedule": []
    },
    {
      "id": "2",
      "name": "Thanh",
      "title": "Software Eng",
      "shedule": []
    }
  ];
  input1: number = 0;
  @Output() dev: EventEmitter<Develepers> = new EventEmitter<Develepers>();

  constructor() { }

  ngOnInit(): void {
  }

  selectDeveloper(event: any) :void {
    const developer = this.developers.find((option => option.id === event.target.value));
    if(developer?.shedule.length == 0) {
      developer?.shedule.push(new Schedule(0,0,0,0,0));
    }
    
    this.dev.emit(developer);
  }
}
