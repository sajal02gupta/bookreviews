import { Injectable } from '@angular/core';
import { books } from "./book";
import { FormsModule } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  book: books[] = [];

  constructor() {
    this.book.push(new books( 1,  "Hold My Hand",  "Durjoy Dutta",  "The book, 'Hold My Hand’ is a contemporary Indian fiction novel that reflects the true aspects of love. Revolving around the relationship of two youngsters, Deep and Ahana, the story reveals the true power of love and the sacrifices one has to endure for the one they love. Written in a refreshing narrative style and crisp story telling technique, the innovative story of this book keeps the readers glued till the end. It is authored by Durjoy Dutta, one of the most popular contemporary Indian writers of his time. It has been published by Penguin India in 2013.",[]));
    this.book.push(new books(2,"The Alchemist", "Paulo Coelho","Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself",[]));
    this.book.push(new books(3,"Black Suits You", "Novoneel Chakroborty", "Twenty-seven-year-old Kiyan Roy is the reclusive author of the bestselling erotica trilogy, Handcuffs. When he appears in public for the first time to promote his books, his readers fall in love with his good looks and wit. However, one of them gets too close. Kiyan is followed and seduced by a mysterious girl who pursues him across cities, book events, hotels, luncheons and media interviews. Soon, he becomes obsessed by her and falls for her charms.",[]));

  }
}

