import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TypeService} from "../../../service/type.service";
import {FondImmobilierService} from "../../../service/fond-immobilier.service";

@Component({
  selector: 'app-rechercheflouesimplevisiteur',
  templateUrl: './rechercheflouesimplevisiteur.component.html',
  styleUrls: ['./rechercheflouesimplevisiteur.component.css']
})
export class RechercheflouesimplevisiteurComponent implements OnInit {
  listeimmobrechercher: any;
  nomType: any;
  selectlogement: any;
  selectedOption: any;
  prix: any;
  distance: any;
  age: any;
  listeparmtest: any;
  navbarCollapsed: any;

  constructor(private router: Router,private activated: ActivatedRoute,private route: ActivatedRoute,
              private typeService:TypeService,private fondImmobilierService: FondImmobilierService) { }

  ngOnInit(): void {
    this.selectlogement = this.route.snapshot.paramMap.get('selectlogement')
    this.selectedOption = this.route.snapshot.paramMap.get('selectedOption')
    this.prix = this.route.snapshot.paramMap.get('prix')
    this.distance = this.route.snapshot.paramMap.get('distance')
    this.age = this.route.snapshot.paramMap.get('age')

    this.typeService.getTypeById(this.selectedOption).subscribe(
      data=>{
        this.nomType=data.nom;
      }
    )

    //this.listeparmtest=this.prixmax+','+this.prixmin+','+this.agemax+','+this.agemin+','+this.distancemax+','+this.distancemin;
    //this.listeparmtest=500+","+200+","+8+","+5+","+30+","+10;
    this.listeparmtest=this.prix.toString()+','+this.age.toString()+','+this.distance.toString()+','+this.selectedOption.toString()+','+this.selectlogement;
    console.error(this.listeparmtest)
    //this.listeparam.push(this.prixmax,this.prixmin,this.agemax,this.agemin,this.distancemax,this.distancemin)
    //console.error(this.listeparam)
    this.fondImmobilierService.getAllImoblerRechercheFlousSimple(this.listeparmtest)
      .subscribe(data=>{
        this.listeimmobrechercher=data;
        console.log(this.listeimmobrechercher);


      })

  }

  envoyerAlerte() {
    let conf = confirm(("IL faut créer un compte"));


    if (conf) {
      this.router.navigateByUrl("/login")

    }}


}
