import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room, RoomsMock } from '../models/room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  rooms: Room[] = RoomsMock;

  roomId: string = '';
  pictures: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.params['id'];
    this.pictures = this.rooms[this.route.snapshot.params['id']].pictures;
    console.log(this.pictures)
  }

}
