import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { User } from 'src/app/models/User';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{


  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, public userService: UserService, public toastr: ToastrService){
    
  }

  private buildForm(){

    this.formulario = this.formBuilder.group({
      name: [,Validators.required],
      apellido: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      photo: [, Validators.required],
      password: [, Validators.required],
      password2: [, [Validators.required, this.sonIgualesValidator]],
    });

  }

  register(){

    let form = this.formulario.value;
    let new_user = new User(form.name, form.apellido, form.email, form.photo, form.password);
    if(form.password == form.password2){
      this.userService.register(new_user).subscribe((respuesta: Respuesta) => {
        if (respuesta.error) {
          this.toastr.error(respuesta.mensaje);
        } else {
          this.toastr.success(respuesta.mensaje);
        }
      });
    }else{
      this.toastr.warning("Las contraseñas tienen que ser iguales.")
    }


  }
  
  

  crearUser(name: string, apellido: string, email: string, imagen:string, contrasena:string){

    let user:User = new User(name,apellido,email,imagen,contrasena);

  }

  sonIgualesValidator(control: AbstractControl){

    let resultado = {sonIguales: true}
  
    if(control.parent?.value.password === control.value){
      resultado = null;
    } 
  
    return resultado
  }

  ngOnInit(): void {
    this.buildForm();
  }

}
