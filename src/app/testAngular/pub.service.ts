import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor() { }
  delete(i,pubs:[]){
   return pubs.splice(i,1)
  }
}
