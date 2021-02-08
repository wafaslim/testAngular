import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any;
  userFound;
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
   const users=[]
   // const users = JSON.parse(localStorage.getItem('users'))  || [];
   if (users.length === 0){
       const admin1={
           email : "js.wafa@gmail.com",
           password : "123",
           id:0,
           role:'admin'   
       };
       
       const admin2={
           email : "nasserimen102@gmail.com",
           password : "14305193",
           id:1,
           role:'admin'   
       };
       const admin3={
           email : "sofien1@gmail.com",
           password : "12345",
           id:2,
           role:'user'  
       };

       users.push(admin1);
       users.push(admin2);
       users.push(admin3);

       localStorage.setItem('users',JSON.stringify(users));
   }
  }
  verifier(){
    this.users = JSON.parse(localStorage.getItem('users'))  || [];
    this.userFound = this.users.find(user=>
       user.email === this.loginForm.value.email && user.password === this.loginForm.value.password);
       console.log(this.userFound)
     if(this.userFound) {
       window.location.href='/home'
     } 
     else{
      console.log('wafa')
       window.location.href='/register'
     }
  }

}
