import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardComponent } from './card/card.component';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  listOfLists = [];
  listSubject = new BehaviorSubject([]);
  activeCard = {};
  activeCardInd = 0;
  activeListInd = 0;
  editMode = false;
  constructor() {
    this.listSubject.subscribe((list) => {
      this.listOfLists = list;
    });
  }
  addNewCardInList(cardInd, listInd): void {
    if (!this.editMode) {
      this.activeCardInd = this.listOfLists[listInd].cardList.length;
    } else {
      this.activeCardInd = cardInd;
    }
    this.activeListInd = listInd;
  }

  updateListOfLists(list): void {
    this.listOfLists = [];
    list.map((item, key) => {
      item.listName = 'List ' + (key + 1);
    });
    this.listSubject.next(list);
  }

  openCardToEdit(card, id): void {
    this.activeCard = {
      listId: id,
      card
    };
  }
}
