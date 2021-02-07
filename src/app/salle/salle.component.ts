import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salle } from '../salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  public id: any;
  found:any
  constructor(private salle: ActivatedRoute ) { }
  salles:Salle[] = [
    {id:1,nom:'éléctro mecanique', capacite:30},
    {id:2,nom:'Genie civile', capacite:50},
    {id:3,nom:'IOT', capacite:100},
    {id:4,nom:'Informatique mecanique', capacite:10},
    {id:5,nom:'BI', capacite:50},
    ]
  ngOnInit(): void {
    this.id = this.salle.snapshot.paramMap.get('id');
    console.log(this.id);
     this.found = this.salles.find(salle => salle.id==this.id);
    console.log(this.found);
    
  }

}
