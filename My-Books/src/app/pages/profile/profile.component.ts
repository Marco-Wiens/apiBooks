import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user:User = new User("","","","https://static.vecteezy.com/system/resources/previews/013/078/569/non_2x/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png","");

  constructor(){
  }

  modificarUser(name:string,apellido:string,email:string, imagen:string){
    if(name != "" && apellido != "" && email != "" && imagen != "" ){
      this.user.name = name;
      this.user.apellido = apellido;
      this.user.email = email;
      this.user.imagen = imagen;
      console.log(this.user.name);
    }else{
      alert("Porfavor, introduce todos los campos");
    }

    
    
  }

}
