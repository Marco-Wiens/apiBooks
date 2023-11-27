import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user:User;

  constructor(){
    this.user = new User("","","","","");
  }

  onSubmit(){
    console.log(this.user);
    
  }

  register(){
    
  }

}
