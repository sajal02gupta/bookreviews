import { Component, OnInit } from '@angular/core';
import { books } from "../book";
import { usercomments } from "../usercomments";
import { Route, ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-viewallreviews',
  templateUrl: './viewallreviews.component.html',
  styleUrls: ['./viewallreviews.component.css']
})
export class ViewallreviewsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService) { }
  comments:usercomments[];
  book:books;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.book = this.data.book[+params.get('bookId')];
      console.log(+params.get('bookId'));
      console.log(this.book);
    })
  }

}
