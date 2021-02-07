import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Utilisateur } from './utilisateur';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  clicked =false
  userslistjson:Utilisateur[]=[];
  userjson:Utilisateur
  userForm2:FormGroup
   userForm = new FormGroup({
     id: new FormControl(),
      name : new FormControl(), 
      username : new FormControl(),
      email : new FormControl(),
     })
  constructor(private us: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.us.getUsersjson().subscribe(result=>{this.userslistjson=result},
                                     err=>{},
                                     ()=>{console.log(this.userslistjson)})
  }
deleteUser(id){
this.us.deleteUserjson(id).subscribe(result=>{},
                                     err=>{},
                                     ()=>{this.getUsers()})
}
addUser(){
  this.us.addUserjson(this.userForm.value).subscribe(result=>{},
                                                     err=>{},
                                                     ()=>{this.getUsers()})
}
detailUser(user){
  this.clicked=true
  this.userForm2 = new FormGroup({
    id: new FormControl(user.id),
     name : new FormControl(user.name), 
     username : new FormControl(user.username),
     email : new FormControl(user.email),
    }) 
} 
modifierUser(id,user){
  this.us.modifierUserjson(user,id).subscribe(result=>{},
                                              err=>{},
                                              ()=>{this.getUsers()})
}
// modifierUser(){
//   this.us.modifierUserjson(this.userForm2.value,this.userForm2.value.id).subscribe(result=>{},
//                                                               err=>{},
//                                                               ()=>{this.getUsers()})
// }
}
