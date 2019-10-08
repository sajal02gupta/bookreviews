import { Component, OnInit } from '@angular/core';
import { books } from "../book";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  book:books;

  constructor(private route: ActivatedRoute, private data:DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
      this.book = this.data.book[+params.get('bookId')];
      console.log(+params.get('bookId'));
      console.log(this.book);
    })
  }

}
