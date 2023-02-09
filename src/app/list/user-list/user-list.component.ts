import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Item} from "../../types/Item";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() dataList: Item[] | undefined;
  @Input() dataType: string | undefined;
  @Output() onItemDelete: EventEmitter<Item> = new EventEmitter<Item>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(idx: any) {
    this.onItemDelete.emit(idx);
  }

}
