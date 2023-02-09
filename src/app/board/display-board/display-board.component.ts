import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/types/task';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent implements OnInit {

  board: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(task: any) {
    this.board.push(task)
  }

}
