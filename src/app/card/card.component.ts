import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardTitle = '';
  description = '';
  comments = [];
  listId = 0;
  isEdit = false;
  editedCardObj = {};
  newComment = '';
  constructor(private service: CommonService, private router: Router) {
    if(!this.service.editMode){

      this.cardTitle = 'Card ' + (this.service.activeCardInd + 1);
      this.addDescription();
    }else{
      this.isEdit = true;
      this.editedCardObj = this.service.listOfLists[this.service.activeListInd].cardList[this.service.activeCardInd];
      this.cardTitle = this.editedCardObj['cardTitle'];
      this.description = this.editedCardObj['description'];
      this.comments = this.editedCardObj['comments'];

    }

   }

  ngOnInit(): void {
  }

  addDescription(): void{
    this.description = 'description here...!!';
  }
  addComment(): void{
    this.comments.push(this.newComment);
    this.newComment = '';
  }
  removeComment(id): void{
    this.comments.splice(id, 1);
  }
  updateCardDetails(): void{
    let list = this.service.listOfLists;
    let listInd = this.service.activeListInd;
    let cardInd = this.service.activeCardInd;
    const cardObj = {
      cardTitle : this.cardTitle,
      description : this.description,
      comments : this.comments
    };
    if(!this.isEdit){

      list[listInd].cardList.push(cardObj);
      this.service.activeListInd = 0;
      this.service.activeCardInd = 0;
    }else{
      this.service.editMode = false;
      this.isEdit = false;
      list[listInd].cardList.splice(cardInd,1,cardObj);
    }
    this.service.updateListOfLists(list);
    this.router.navigate(['/board']);
  }
}
