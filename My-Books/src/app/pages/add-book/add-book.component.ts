import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  books: Books[];

  constructor(public booksService: BooksService, public toastr: ToastrService){

  }
  
  crearLibro( title: string, type: string, author: string, price:string, photo:string){


    // Verifica que todos los campos estén llenos
    if (title !== "" && type !== "" && author !== "" && price !== undefined && photo !== "") {
      
      let newBook: Books = new Books(title, type, author, Number(price), photo);
      
      this.booksService.add(newBook).subscribe((respuesta: Respuesta) => {
        if (!respuesta.error) {
          this.toastr.success(respuesta.mensaje);
          
        } else {
          this.toastr.error(respuesta.mensaje);
        }
      });
    } else this.toastr.error('Rellene todos los campos porfavor');
  }
}


