import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../../service/type.service";
import {FondImmobilierService} from "../../../service/fond-immobilier.service";
import {data} from "jquery";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rechercheclassique',
  templateUrl: './rechercheclassique.component.html',
  styleUrls: ['./rechercheclassique.component.css']
})
export class RechercheclassiqueComponent implements OnInit {
  listeType:any;
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
  selectlogement:any;
  fondImmobilier: any;
 listeFondImmobilier: any;

  constructor(private typService: TypeService , private fondImmobilierService:FondImmobilierService
 , private  router:Router) { }

  ngOnInit(): void {
    this.getTypeList();
   // console.error(this.listeType);
    //console.log("avant"+this.selectedOption)
    //console.log("apres"+this.selectedOption)
  }
  getTypeList() {
    this.typService.getTypesList().subscribe(data => {
      //console.error(data)
      this.listeType=data

    });}
  rechcheFonImmoblie(){
    this.typService.getTypeById(this.selectedOption).subscribe(
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

    //console.error(this.selectedOption,this.prixmin,this.prixmax,this.agemin)
  }
  annulerrechercher(){
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

  actualiserechercher() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(
      data=>{console.log(data)}
    )

  }

  details(item:any) {
    this.router.navigateByUrl("/detailstype/:fondId");

  }

  changeStatus(data:any) {
    console.log(data)
    this.fondImmobilierService.updatelogementsatuts(data).subscribe(
      dd=>{console.log(dd)}
    )
    this.getAllFondImmobilier();
    this.getTypeList();
  }

  getAllFondImmobilier() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
      //console.error(data)

      this.fondImmobilier=data;
      this.listeFondImmobilier=data;
    });


  }
}
