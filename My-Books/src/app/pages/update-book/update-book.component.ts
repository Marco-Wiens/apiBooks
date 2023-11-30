import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {


  constructor(public booksService: BooksService, public toastr: ToastrService){

  }

  modificarLibro(id_book:string, title: string, type: string, author: string, price:string, photo:string){
    if(id_book != "" && title != "" && type != "" && author != "" && price != "" && photo != ""){
        // Crea un nuevo libro
        let modBook: Books = new Books(title, type, author, Number(price), photo, Number(id_book));
        // Llama al método add del servicio BooksService que añade el libro al array de libros
        this.booksService.edit(modBook).subscribe((respuesta: Respuesta) => {
          if (respuesta.error) {
            this.toastr.error(respuesta.mensaje);
          } else {
            this.toastr.success(respuesta.mensaje);
          }
        });
      
    } else {
      this.toastr.error("Por favor, rellene todos los campos");
    }
  }
}
