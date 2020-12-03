import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardTitle = 'Simple Board';
  editMode = false;
  listsToDisplay: any = [];

  constructor(private service: CommonService, private router: Router) {
    this.service.listSubject.subscribe((list) => {
      this.listsToDisplay = list;
    });
  }


  changeBoardTitle(event): void {
    this.boardTitle = event.target.value;
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }
  ngOnInit(): void {

  }

  editCard(cardInd, listNumber): void {
    this.service.editMode = true;
    this.service.addNewCardInList(cardInd, listNumber);
    this.router.navigate(['/card']);
  }

  addNewList(): void {
    const listObj: any = new ListComponent(this.listsToDisplay.length);
    this.listsToDisplay.push(listObj);
    this.service.updateListOfLists(this.listsToDisplay);
  }
  addNewCard(listNumber): void {

    this.service.addNewCardInList(this.listsToDisplay[listNumber].cardList.length, listNumber);
    this.router.navigate(['/card']);
  }

  deleteList(id): void {
    this.listsToDisplay.splice(id, 1);
    this.service.updateListOfLists(this.listsToDisplay);
  }
  removeCardFromList(cardIndex, listIndex): void {
    this.listsToDisplay[listIndex].cardList.splice(cardIndex, 1);
    this.service.updateListOfLists(this.listsToDisplay);
  }

}
