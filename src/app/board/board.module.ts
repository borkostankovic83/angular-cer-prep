import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayBoardComponent } from './display-board/display-board.component';
import { BoardComponent } from './board/board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';



@NgModule({
  declarations: [
    DisplayBoardComponent,
    BoardComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BoardModule { }
