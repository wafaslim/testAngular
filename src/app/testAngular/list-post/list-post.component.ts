import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PubService } from '../pub.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  pubs:any;
  pub:any;
  public titre:any;
  found:any;
  constructor(private service: PubService,private route:Router) { }

  ngOnInit(): void {
   this.pubs = JSON.parse(localStorage.getItem('pubs'))  || [];
  }
delete(i){
  this.service.delete(i,this.pubs)
  localStorage.setItem('pubs',JSON.stringify(this.pubs))
}
detail(index){
  this.route.navigateByUrl('listPost/update/:titre')
}
}
