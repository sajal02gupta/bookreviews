import { Component, OnInit } from '@angular/core';
import { books } from "../book";
import { from } from "rxjs";
import { DataService } from "../data.service";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  book: books[] = [];

  constructor(private data: DataService) { 

    this.book = this.data.book;
    console.log(this.book.length);
  }
  
  
  ngOnInit() {
    

  }

}
