import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../service/type.service";
import {Router} from "@angular/router";
import {FondImmobilierService} from "../../service/fond-immobilier.service";
import {data} from "jquery";

@Component({
  selector: 'app-rechercherclassique',
  templateUrl: './rechercherclassique.component.html',
  styleUrls: ['./rechercherclassique.component.css']
})
export class RechercherclassiqueComponent implements OnInit {
  listeType: any;
  selectedOption: any;
  prixmax:any;
  prixmin:any;
  agemax:any
  agemin:any;
  distancemin:any;
  distancemax:any;
  listeparmtest:any;
  listeimmobrechercher:any;
  nomType:any;
  item: any;
  selectlogement: any;
  fondImmobilier: any;

  constructor(private typeService:TypeService,private router:Router,private fondImmobilierService:FondImmobilierService) { }

  ngOnInit(): void {
    this.getTypeList();
    this.getAllFondImmobilier();
  }
  /* pour affiche le liste de fond immobilier*/
  getAllFondImmobilier() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
     // console.error(data)
      this.fondImmobilier=data;
    });

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
    this.prixmax= null
    this.prixmin=null
    this.agemax= null
    this.agemin= null
    this.distancemax = null
    this.distancemin = null
    this.listeimmobrechercher=null;

  }

  recherchefond() {
   /* this.router.navigateByUrl("/rechercherclass/:id/:prix/:surface");*/
    this.typeService.getTypeById(this.selectedOption).subscribe(
      data=>{
        this.nomType=data.nom;
      }
    )

    //this.listeparmtest=this.prixmax+','+this.prixmin+','+this.agemax+','+this.agemin+','+this.distancemax+','+this.distancemin;
    //this.listeparmtest=500+","+200+","+8+","+5+","+30+","+10;
    this.listeparmtest=this.prixmax.toString()+','+this.prixmin.toString()+','+this.agemax.toString()+','+this.agemin.toString()+','+this.distancemax.toString()+','+this.distancemin.toString()+','+this.selectedOption.toString()+','+this.selectlogement;
    console.error(this.listeparmtest)
    //this.listeparam.push(this.prixmax,this.prixmin,this.agemax,this.agemin,this.distancemax,this.distancemin)
    //console.error(this.listeparam)
    this.fondImmobilierService.getAllFondImmobilier(this.listeparmtest)
      .subscribe(data=>{
        this.listeimmobrechercher=data;
        console.log(this.listeimmobrechercher);


      })

   // this.router.navigateByUrl("/rechercherclass/:fondId");


  }
}
