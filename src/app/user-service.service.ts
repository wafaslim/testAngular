import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './users/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  usersUrl:string='/api/users';
  userslist:[];
  userForm;
  constructor(private http:HttpClient) { }
  // getUsersjson():Observable<any>{this.http.get<any>(this.usersUrl)}
  getUsersjson():Observable<any>{
    return this.http.get<any>(this.usersUrl)
  }
  deleteUserjson(id):Observable<Utilisateur>{
    const url=this.usersUrl+'/'+id;
    return this.http.delete<Utilisateur>(url)
  }
  addUserjson(user:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.usersUrl,user)
  }
  modifierUserjson(user,id):Observable<Utilisateur>{
return this.http.put<Utilisateur>(this.usersUrl+'/'+id,user)
  }
}
