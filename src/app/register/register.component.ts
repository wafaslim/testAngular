import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users=[];
registerForm= new FormGroup({
  email: new FormControl(''),
  password1: new FormControl(''),
  password2: new FormControl(''),
})


  constructor() { }

  ngOnInit(): void {
  }
register(){
  if(this.registerForm.value.password1==this.registerForm.value.password2){
    this.users = JSON.parse(localStorage.getItem('users'))  || [];
    console.log(this.registerForm.value);
    
    this.users.push(this.registerForm.value)
    localStorage.setItem('users',JSON.stringify(this.registerForm.value));
    // window.location.href='/login'
  }
}
}
