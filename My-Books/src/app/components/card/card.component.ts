import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output() eventoBook = new EventEmitter<number>();

  @Input() book: any;
  @Input() i?: number;

  constructor(public booksService: BooksService){
    
   
  }


  deleteBook(){
    this.eventoBook.emit(this.book.id_book);

  }

}
