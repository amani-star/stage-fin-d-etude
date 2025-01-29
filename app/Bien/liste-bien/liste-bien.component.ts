import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-bien',
  templateUrl: './liste-bien.component.html',
  styleUrls: ['./liste-bien.component.css']
})
export class ListeBienComponent implements OnInit {
  dataTable: any;
  dtOption: any = {};
  model="villa"
  choixprix="loue"

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.dtOption = {

      "paging": true,
      "ordering": false,
      "info":   true

    };


  }

  listemasion(){
    console.log("aaaaaaaaaaaaaaaaaaa")
    this.model="masion"
  }
  listeterrain(){
    this.model="terrain"
    this.ngOnInit()
  }
  listefondcommerce(){
    this.model="fondcommerce"
    this.ngOnInit()

  }
  listeappartement(){


    this.model="appartement"
    this.ngOnInit()



  }
  ajoutermasions(){
    this._router.navigate(['dash/ajoutermasion']);

  }
  ajouterduplex(){
    this._router.navigate(['dash/ajouterduplex']);
  }
  ajoutertriplex(){
    this._router.navigate(['dash/ajoutertriplex']);

  }
  ajouterterrain(){
    this._router.navigate(['dash/ajouterterrain']);
  }
  ajouterfondcommerce(){
    this._router.navigate(['dash/ajouterfondcommerce']);
  }
  ajouterappartement(){
    this._router.navigate(['dash/ajouterappartement']);
  }
  ajouterbureau(){
    this._router.navigate(['dash/ajouterbureau']);

  }
  ajouteriemmuble(){
    this._router.navigate(['dash/ajouterimmeuble']);


  }
  villa(){

    this.model="villa"
    this.ngOnInit()




  }
  duplex(){
    this.model="duplex"
    this.ngOnInit()


  }
  triplx(){
    this.model="triplx"
    this.ngOnInit()


  }
  listbureau (){
    this.model="bureau"
    this.ngOnInit()


  }
  listeimmeuble(){
    this.model="immeuble"
    this.ngOnInit()


  }
  achetervilla(){
    this.choixprix="Vente"
  }
  louevilla(){
    this.choixprix="loue"
  }


}
