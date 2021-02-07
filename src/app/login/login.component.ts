import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = JSON.parse(localStorage.getItem("users")) || [];
  userFound;
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }
  verifier(){
    this.userFound = this.users.find((user)=>
       user.email === this.loginForm.value.email && user.password === this.loginForm.value.password);
     if(this.userFound) {
       window.location.href='/home'
     } 
     else{
       window.location.href='/register'
     }
  }

}
