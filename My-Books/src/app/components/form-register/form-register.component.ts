import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{


  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder){
    
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
