import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user:User;

  constructor(public userService: UserService, private toastr:ToastrService){
  }


  ngOnInit(): void {
    this.user = this.userService.user;
  }

  modificarUser(name:string,apellido:string,email:string, imagen:string, password:string, password2:string){
    if(name != "" && apellido != "" && email != "" && imagen != "" && password != ""){
      
      
      if((!password && !password2) || password == password2){
        this.user.name = name;
        this.user.last_name = apellido;
        this.user.email = email;
        this.user.photo = imagen;
        this.user.password = password;
        console.log(this.user.name);
        this.userService.edit(this.user).subscribe((respuesta:Respuesta) => {
          if (respuesta.error) {
            this.toastr.error(respuesta.mensaje);
          } else {
            this.toastr.success(respuesta.mensaje);
            this.user = this.userService.user;
          }
        });
      }else{
        this.toastr.error("Las contraseñas tienen que ser iguales.");
      }
    }else{
      this.toastr.error("Porfavor, introduce todos los campos");
    }

    
    
  }

}
