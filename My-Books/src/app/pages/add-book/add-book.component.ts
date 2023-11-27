import { Component, Input } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {



  constructor(public booksService: BooksService){

  }
  
  crearLibro(id_book:string, title: string, type: string, author: string, price:string, photo:string){

    // Verifica que todos los campos estén llenos
    if (id_book !== undefined && title !== "" && type !== "" && author !== "" && price !== undefined && photo !== "") {
      // Verifica si ya existe un libro con el mismo id_book
      const existingBook = this.booksService.getAll().find(book => book.id_book === Number(id_book));

      if (existingBook) {
        alert("Ya existe un libro con el mismo ID. No se puede añadir el libro.");
      } else {
        // Crea un nuevo libro
        let bookNew: Books = new Books(title, type, author, Number(price), photo, Number(id_book));
        // Llama al método add del servicio BooksService que añade el libro al array de libros
        this.booksService.add(bookNew);
        
      }
      
    } else {
      alert("Por favor, rellene todos los campos");
    }
  }

}
