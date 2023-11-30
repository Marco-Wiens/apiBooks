import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { Respuesta } from 'src/app/models/respuesta';
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

  constructor(public booksService:BooksService, public toastr: ToastrService){
    
  }

  


  ngOnInit(): void {
    this.mostrarTodos();
  }

  public mostrarTodos(){
    this.booksService.getAll().subscribe((respuesta: Respuesta) => {
      if (respuesta.error) {
        this.toastr.error(respuesta.mensaje);
      } else {
        const dataAsArray: Books[] = Array.isArray(respuesta.data) ? respuesta.data : [respuesta.data];
        this.booksService.books = dataAsArray;
        this.books = this.booksService.books;
      }
    });
  }

  deleteBook(id_libro: number){
    
    this.booksService.delete(id_libro).subscribe((respuesta: Respuesta) => {
      if (respuesta.error) {
        this.toastr.error(respuesta.mensaje);
      } else {
        this.toastr.success(respuesta.mensaje);
        this.mostrarTodos();
      }
    });
  }


  buscar(id_libro: HTMLInputElement){
    // Llama a la función getOne con el término de búsqueda actual

    this.booksService.getOne(id_libro.value).subscribe((respuesta: Respuesta) => {
      
        if (id_libro.value) {
          if (respuesta.error) {
            this.toastr.error(respuesta.mensaje);
          } else {
            const dataAsArray: Books[] = Array.isArray(respuesta.data) ? respuesta.data : [respuesta.data];
            this.books = dataAsArray;
            
          }
        } else {
          this.mostrarTodos();
        }
      });
    
    
  }

}
