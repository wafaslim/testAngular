import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  pubs = JSON.parse(localStorage.getItem('pubs'))  || [];
  form:any
pubForm= new FormGroup({
  titre:new FormControl(''),
  description: new FormControl(''),
  categorie: new FormControl(''),
  date: new FormControl('')
})
  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  add(){
    this.form=this.pubForm .value
    this.pubs.push(this.form)
    localStorage.setItem('pubs',JSON.stringify(this.pubs));
    this.route.navigateByUrl('listPost')
  }
}
