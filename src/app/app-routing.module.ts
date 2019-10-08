import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from "./booklist/booklist.component";
import { ViewbookComponent } from "./viewbook/viewbook.component";
import { AddcommentComponent } from './addcomment/addcomment.component';
import { ViewallreviewsComponent } from "./viewallreviews/viewallreviews.component";


const routes: Routes = [
  {path:'booklist', component: BooklistComponent},
  {path:'viewbook/:bookId', component: ViewbookComponent},
  {path:'addcomment/:bookId', component:AddcommentComponent},
  {path: 'viewallreviews',component: ViewallreviewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
