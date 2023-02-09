import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/types/task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() task: EventEmitter<Task> = new EventEmitter<Task>();
  taskForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      name: 'Task',
      type: 'Backlog'
    });
  }

  addTask() {
    this.task.emit(this.taskForm.value);
    console.log('task ',this.taskForm.value)
  }

}
