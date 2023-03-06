import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room, RoomsMock } from './models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  rooms: Room[] = RoomsMock; 
  private bookingForm!: FormGroup;
  dateValidator: any; 
  
  getFilteredRooms(r: any) {
    return this.rooms.filter((room: Room) => {
      return room.reservations <= r.startDate
        && room.reservations >= r.endDate
        && room.capacity >= r.children + r.adults;
    })
  };
  

  // constructor(private fb: FormBuilder) { 
  //   this.bookingForm = this.fb.group({
  //     startDate: [null, Validators.required],
  //     endDate: [null, [Validators.required, this.dateValidator]],
  //     adults: [1, Validators.required],
  //     children: [0, Validators.required]
  //   });
  // }

  setBookingProssData(form: FormGroup) {
    this.bookingForm = form;
  }

  getBookingProssData() {
    return this.bookingForm;
  }
}
