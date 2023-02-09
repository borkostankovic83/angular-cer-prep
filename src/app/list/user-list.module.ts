import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    DisplayComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class UserListModule { }
