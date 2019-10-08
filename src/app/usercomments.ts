export class usercomments {
    constructor(id, userName, email, comment) {
        this.userName=userName;
        this.email=email;
        this.comment=comment;
    }
    id:number;
    userName: string;
    email: string;
    comment: string;
}