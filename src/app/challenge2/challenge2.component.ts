import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component implements OnInit {
userForm= new FormGroup({
  nom: new FormControl(''),
  prenom: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
})
  constructor() { }

  ngOnInit(): void {
  }

}
