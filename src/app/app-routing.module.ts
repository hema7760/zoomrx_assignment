import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path: 'board', component: BoardComponent},
  {path: 'card', component: CardComponent},
  {path: '', redirectTo:'/board' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
