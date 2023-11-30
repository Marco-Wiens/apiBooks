import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Respuesta } from '../models/respuesta';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // Array donde se van a ir guardando todos los libros
 
  public books: Books[] = [];
  private url = "http://localhost:3000/books";

  constructor( public http: HttpClient, public userService: UserService) {

  }

  public getAll(): Observable<object>{
   
    return this.http.get(this.url + "?id_user="+ this.userService.user.id_user);

  }

  public getOne(id_book:string):Observable<object>{

    let id_libro = Number(id_book);
    
    return this.http.get(this.url + "?id_user="+this.userService.user.id_user+"&id_book=" + id_libro);
  }

  public add(book:Books):Observable<object>{

      return this.http.post(this.url + "?id_user="+this.userService.user.id_user, book);
    
  }

  public edit(book:Books):Observable<object>{
    

    return this.http.put(this.url+ '?id_book=' + book.id_book, book); 

  } 

  public delete(id_book: number): Observable<object> {
    
    return this.http.delete(this.url + '?id_book=' + id_book);
  }

}
