import { BooklistComponent } from './booklist/booklist.component';
import { usercomments } from './usercomments';

export class books {
    
    constructor(id, bookName, bookAuthor, bookDescription, comments) {
        this.id=id;
        this.bookName=bookName;
        this.bookAuthor=bookAuthor;
        this.bookDescription=bookDescription;
        this.comment = comments;
    };
    id:number;
    bookName: string;
    bookAuthor: string;
    bookDescription: string;
    comment:usercomments[];
}