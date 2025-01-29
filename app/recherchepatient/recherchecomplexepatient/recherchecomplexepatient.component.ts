import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../service/type.service";
import {FondImmobilierService} from "../../service/fond-immobilier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recherchecomplexepatient',
  templateUrl: './recherchecomplexepatient.component.html',
  styleUrls: ['./recherchecomplexepatient.component.css']
})
export class RecherchecomplexepatientComponent implements OnInit {
  listeType: any;
  selectedOption="";
  selectlogement="";
  listeimmobrechercher:any;
  nomType:any;
  prix="empty" ;
  age="empty";
  distance="empty";
  listeparmtest:any;
  termelogique="ou";
  fondImmobilier: any;
  paramter: any;
  navbarCollapsed: any;
  constructor(private typeService: TypeService, private fondImmobilierService:FondImmobilierService,
              private router:Router) { }

  ngOnInit(): void {
    this.getTypeList();
    this.getAllFondImmobilier();
  }
  getTypeList() {
    this.typeService.getTypesList().subscribe(data => {
      //console.error(data)
      this.listeType=data

    });}
  getAllFondImmobilier() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
      // console.error(data)
      this.fondImmobilier=data;
    });}
  annulerrechercher() {
    this.selectedOption=""
    this.selectlogement=""
    this.distance=""
    this.age=""
    this.prix=""
    this.listeimmobrechercher="";
  }
  concate() {    this.paramter=this.selectlogement+','+this.selectedOption+','+this.prix+','+this.distance+','+this.age+','+this.termelogique;
  }
  onItemchange(terme: any) {
    this.termelogique=terme;  }
}
