import { Component, OnInit } from '@angular/core';
import { books } from "../book";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Route } from "@angular/router";
import { DataService } from "../data.service";
import { usercomments } from "../usercomments";

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  book: books;
  newcomment: usercomments;
  usercomment:usercomments[]=[];
  constructor(private route: ActivatedRoute, private data:DataService) { }

  userName: string;
  email: string;
  comment: string;
  id:number;
  
  createComment(){
    
      this.newcomment = new usercomments(this.id, this.userName, this.email, this.comment);
      this.usercomment.push(this.newcomment);
      this.book.comment.push(this.newcomment);
      console.log(this.usercomment);
      console.log(this.book);
      
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.book = this.data.book[+params.get('bookId')-1];
    })
  }

}
