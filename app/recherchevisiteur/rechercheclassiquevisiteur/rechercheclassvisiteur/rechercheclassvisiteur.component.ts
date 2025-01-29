import { Component, OnInit } from '@angular/core';
import {FondImmobilie} from "../../../model/fond-immobilie";
import {ActivatedRoute, Router} from "@angular/router";
import {FondImmobilierService} from "../../../service/fond-immobilier.service";
import {TypeService} from "../../../service/type.service";

@Component({
  selector: 'app-rechercheclassvisiteur',
  templateUrl: './rechercheclassvisiteur.component.html',
  styleUrls: ['./rechercheclassvisiteur.component.css']
})
export class RechercheclassvisiteurComponent implements OnInit {
  selectlogement: any;
  selectedOption: any;
  prixmax: any;
  prixmin: any;
  agemax: any;
  agemin: any;
  distancemax: any;
  distancemin: any;
  fondImmobilier = new FondImmobilie();
  nomType:any ;
  listeparmtest: any;
  listeimmobrechercher: any;
  navbarCollapsed: any;
  check=true;

  constructor(private activated: ActivatedRoute,
              private router: Router,
              private fondImmobilierService: FondImmobilierService, private route: ActivatedRoute,
              private typeService:TypeService) { }

  ngOnInit(): void {
    this.selectlogement = this.route.snapshot.paramMap.get('selectlogement')
    this.selectedOption = this.route.snapshot.paramMap.get('selectedOption')
    this.prixmax = this.route.snapshot.paramMap.get('prixmax')
    this.prixmin = this.route.snapshot.paramMap.get('prixmin')
    this.agemax = this.route.snapshot.paramMap.get('agemax')
    this.agemin = this.route.snapshot.paramMap.get('agemin')
    this.distancemax = this.route.snapshot.paramMap.get('distancemax')
    this.distancemin = this.route.snapshot.paramMap.get('distancemin')


    console.log(this.selectlogement + this.selectedOption + this.prixmax+this.prixmin+this.agemax+this.agemin)
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

}


  envoyerAlerte() {
    let conf = confirm(("IL faut créer un compte"));


    if (conf) { this.router.navigateByUrl("/login")

      }}


}
