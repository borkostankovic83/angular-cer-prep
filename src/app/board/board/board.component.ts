import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/types/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() board: Task[] = [];
  @Input() type: string = '';
  @Output() updateTask: EventEmitter<Task[]> = new EventEmitter<Task[]>();
  
  constructor() { }

  ngOnInit(): void {
  }

  back(task: any) {
    switch(task.type) {
      case 'ToDo': 
        task.type = 'Backlog';
        break;
      case 'Ongoing': 
        task.type = 'ToDo';
        break;
      case 'Done': 
        task.type = 'Ongoing';
        break;
    }
    this.updateTask.emit(this.board);
  }

  next(task: any) {
    switch(task.type) {
      case 'Backlog': 
        task.type = 'ToDo';
        break;
      case 'ToDo': 
        task.type = 'Ongoing';
        break;
      case 'Ongoing': 
        task.type = 'Done';
        break;
    }
    this.updateTask.emit(this.board);
  }

  delete(index: any) {
    this.board.splice(index, 1);
    this.updateTask.emit(this.board);
  }

}
