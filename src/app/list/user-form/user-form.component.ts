import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Item} from "../../types/Item";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();
  isSong: boolean = false;
  item: Item = {} as Item;
  type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  isSongChange(value: string): void {
    if(value == 'Book') {
      this.isSong = false;
    } else  {
      this.isSong = true;
    }
    this.type = value;
  }

  addUser(): void {
    this.item.type = this.type;
    this.onItemAdded.emit(this.item);
    this.item = {} as Item;
  }

}
