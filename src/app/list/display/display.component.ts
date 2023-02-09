import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/types/Item';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  Book: string = 'Book';
  Song: string = 'Song';
  dataB: Item[] = [];
  dataS: Item[] = [];
  data: Item[] = [];
  constructor() {

  }

  ngOnInit() {
  }
  

  onItemAdded(item: any) {
    if(item.type === 'Song') {
      this.dataS.push(item);
    }
    if(item.type === 'Book') {
      this.dataB.push(item);
    }
    this.data.push(item);
    console.log('item ',item);
  }


  onItemDelete(item: any) {
    // this.data.splice(this.data.indexOf(item, 0), 1);
    this.data.splice(item, 1);

  }
}
