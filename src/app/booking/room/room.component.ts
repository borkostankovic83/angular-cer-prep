import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room, RoomsMock } from '../models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  
  rooms: Room[] = RoomsMock;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRoomDetails(id: string): void {
    this.router.navigate(['/room', id]);
  }

}
