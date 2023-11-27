import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Books } from 'src/app/models/books';
import { FormatoLibrosPipe } from 'src/app/pipes/formato-libros.pipe';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  

  
  books: Books[];
  searchItem: string = "";

  constructor(public booksService:BooksService){
    this.books = this.booksService.getAll();
  }

  


  ngOnInit(): void {

  }

  deleteBook(i:number){
    
    this.booksService.delete(i);
    // Recargamos el array sin el libro borrado
    this.books = this.booksService.getAll();
  }


  buscar(){
    // Llama a la función getOne con el término de búsqueda actual

    this.books = this.booksService.getOne(this.searchItem);
    
    
  }

}
