import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room, RoomsMock } from '../models/room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  rooms: Room[] = RoomsMock;
  bookingForm!: FormGroup;

  roomId: string = '';
  pictures: string[] = [];

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {
    this.bookingForm = this.roomService.getBookingProssData();
    this.roomId = this.route.snapshot.params['id'];
    this.pictures = this.rooms[this.route.snapshot.params['id']-1].pictures;
    // console.log(this.pictures);
  }

}
