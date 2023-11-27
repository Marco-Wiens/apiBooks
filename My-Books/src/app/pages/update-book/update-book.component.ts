import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {


  constructor(public booksService: BooksService){

  }

  modificarLibro(id_book:string, title: string, type: string, author: string, price:string, photo:string){
    if(id_book != "" && title != "" && type != "" && author != "" && price != "" && photo != ""){
        // Crea un nuevo libro
        let modBook: Books = new Books(title, type, author, Number(price), photo, Number(id_book));
        // Llama al método add del servicio BooksService que añade el libro al array de libros
        this.booksService.edit(modBook);
      
    } else {
      alert("Por favor, rellene todos los campos");
    }
  }
}
