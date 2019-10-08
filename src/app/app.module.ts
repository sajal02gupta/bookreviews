import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { ViewallreviewsComponent } from './viewallreviews/viewallreviews.component';


@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    ViewbookComponent,
    AddcommentComponent,
    ViewallreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
