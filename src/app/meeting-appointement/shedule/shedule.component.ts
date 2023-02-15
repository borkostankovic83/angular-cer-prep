import { Component, Input, OnInit } from '@angular/core';
import { Develepers } from '../models/develepers';
import { Schedule } from '../models/schedule';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit {

  @Input() dev: Develepers = {} as Develepers;
  @Input() schedule: Schedule = {} as Schedule;
  selectedHour: number = 0;
  selectedColor = 'black';

  constructor() { }

  ngOnInit(): void {
  }

  checkToDisable(num: number):boolean {
    const sch = this.dev.shedule;
    for (let key in sch) {
      if(sch[key].hour == num && sch[key].day == this.schedule.day && sch[key].month == this.schedule.month && sch[key].year == this.schedule.year) {
        return true;
      }    
    }
    return false;
  }

  bookTime(): void {
    if(this.dev.shedule.length == 1 && this.dev.shedule[0].hour == 0){
      this.dev.shedule[0].hour = this.selectedHour;
      this.dev.shedule[0].year = this.schedule.year;
      this.dev.shedule[0].month = this.schedule.month;
      this.dev.shedule[0].day = this.schedule.day;
    } else {
      this.dev.shedule.push(new Schedule(this.dev.shedule.length, this.schedule.year, this.schedule.month, this.schedule.day, this.selectedHour));
    }
  }


}
