import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../service/type.service";
import {FondImmobilierService} from "../../service/fond-immobilier.service";

@Component({
  selector: 'app-rechercherflouesimple',
  templateUrl: './rechercherflouesimple.component.html',
  styleUrls: ['./rechercherflouesimple.component.css']
})
export class RechercherflouesimpleComponent implements OnInit {
  selectlogement: any;
  selectedOption: any;
  listeType: any;
  prix: any;
  distance: any;
  age: any;
  listeimmobrechercher: any;
  paramter:any;
  fondImmobilier: any;

  constructor( private typeService:TypeService,private fondImmobilierService:FondImmobilierService) { }

  ngOnInit(): void {
    this.getTypeList();
    this.getAllFondImmobilier();
  }
  getTypeList() {
    this.typeService.getTypesList().subscribe(data => {
      console.error(data)
      this.listeType=data
    });}

  actualiserechercher() {

  }

  annulerrechercher() {
    this.selectedOption=null
    this.selectlogement=null
    this.distance=null
    this.age=null
    this.prix=null
    this.listeimmobrechercher=null;

  }

  concate() {
    this.paramter=this.selectlogement+','+this.selectedOption+','+this.prix+','+this.distance+','+this.age;


  }
  getAllFondImmobilier() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
      // console.error(data)
      this.fondImmobilier=data;
    });

  }
}
