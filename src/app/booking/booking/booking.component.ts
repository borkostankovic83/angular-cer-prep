import { Component, OnInit } from '@angular/core';
import { Room, RoomsMock } from '../models/room';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
  rooms: Room[] = RoomsMock;

  constructor() { }

  ngOnInit(): void {
  }

}
