import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  bookingForm: FormGroup;


  constructor(private fb: FormBuilder) { 
    this.bookingForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, [Validators.required, this.dateValidator]],
      adults: [1, Validators.required],
      children: [0, Validators.required]
    });
  }

  ngOnInit(): void {
  }



  book() {
    const { startDate, endDate, adults, children } = this.bookingForm.value;
    console.log(`Booking from ${startDate} to ${endDate} with ${adults} adults and ${children} childrens.`);
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

