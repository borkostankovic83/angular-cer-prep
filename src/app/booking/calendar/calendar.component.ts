import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  bookingForm: FormGroup;


  constructor(private fb: FormBuilder, private roomService: RoomService) { 
    this.bookingForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, [Validators.required, this.dateValidator]],
      adults: [1, Validators.required],
      children: [0, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getFiltered() {
    const { startDate, endDate, adults, children } = this.bookingForm.value;
    this.roomService.getFilteredRooms(this.bookingForm.value);
    
  }

  book() {
    const { startDate, endDate, adults, children } = this.bookingForm.value;
    this.roomService.setBookingProssData(this.bookingForm.value);
    console.log(`Booking from ${startDate} to ${endDate} with ${adults} adults and ${children} childrens.`);

    console.log(`Booking from `, this.bookingForm.value);
  }

  dateValidator(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value && c.parent) {
      const startDate = new Date(c.parent.get('startDate')?.value);
      const endDate = new Date(c.value);
      if (endDate < startDate) {
        return { 'endDateBeforeStartDate': true };
      }
    }
    return null;
  }

}

