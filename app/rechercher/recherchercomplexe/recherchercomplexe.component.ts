import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../service/type.service";
import {FondImmobilierService} from "../../service/fond-immobilier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recherchercomplexe',
  templateUrl: './recherchercomplexe.component.html',
  styleUrls: ['./recherchercomplexe.component.css']
})
export class RecherchercomplexeComponent implements OnInit {
  listeType: any;
  selectedOption="";
  selectlogement="";
  listeimmobrechercher:any;
  nomType:any;
  prix="empty" ;
  age="empty";
  distance="empty";
  listeparmtest:any;
  termelogique="OU";
  fondImmobilier: any;
paramter: any;

  constructor( private typeService: TypeService, private fondImmobilierService:FondImmobilierService,
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

  rechcheflouesimpleFonImmoblie() { console.log(this.termelogique)

    this.typeService.getTypeById(this.selectedOption).subscribe(
      data=>{
        this.nomType=data.nom;
      }
    )
    if(this.prix === undefined){

      this.listeparmtest=''+','+this.age.toString()+','+this.distance.toString()+','+this.termelogique+','+this.selectedOption.toString()+','+this.selectlogement;

    }
    else if(this.distance=== undefined){
      this.listeparmtest=this.prix+','+this.age.toString()+','+''+','+this.termelogique+','+this.selectedOption.toString()+','+this.selectlogement;

    }else{
      this.listeparmtest=this.prix+','+''+','+this.distance.toString()+','+this.termelogique+','+this.selectedOption.toString()+','+this.selectlogement;

    }
    console.error(this.listeparmtest)

    this.fondImmobilierService.getAllImoblerRechercheFlousCompexe(this.listeparmtest)
      .subscribe(data=>{
        this.listeimmobrechercher=data;
        console.log(this.listeimmobrechercher);

      })
  }



  annulerrechercherFloueSimple() {

  }

  onItemchange(terme: any) {
    this.termelogique=terme;
  }


  actualiserechercher() {

  }

  concate() {    this.paramter=this.selectlogement+','+this.selectedOption+','+this.prix+','+this.distance+','+this.age+','+this.termelogique;


  }

  annulerrechercher() {
    this.selectedOption=""
    this.selectlogement=""
    this.distance=""
    this.age=""
    this.prix=""
    this.listeimmobrechercher="";


  }
  getAllFondImmobilier() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
      // console.error(data)
      this.fondImmobilier=data;
    });}
}
