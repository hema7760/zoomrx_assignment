import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listName = '';
  cardList: any = [];

  constructor(@Inject(Number) private id: number) {
    this.listName = `List ${id + 1}`;
  }

  ngOnInit(): void {
  }

}
