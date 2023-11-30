import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user:User;

  constructor(public userService: UserService,
     private toastr: ToastrService,
     private router: Router){

    this.user = new User("","","","","");
  }

  onSubmit(){
    
      this.userService.login(this.user).subscribe((respuesta: Respuesta) => {
        if (respuesta.error) {
          this.toastr.error(respuesta.mensaje);
        } else {
          this.toastr.success(respuesta.mensaje);
          this.userService.logueado = true;
          this.userService.user.id_user = respuesta.data[0].id_user;
          this.userService.user.email = respuesta.data[0].email;
          this.userService.user.name = respuesta.data[0].name;
          this.userService.user.last_name = respuesta.data[0].last_name;
          this.userService.user.password = respuesta.data[0].password;
          this.userService.user.photo = respuesta.data[0].photo;
          this.logeado(this.userService.logueado);

        }
      });
    
  }

  logeado(logueado:boolean){
    if(logueado){
      this.router.navigate(['/books']);
    }
  }

}
