import { Component, OnInit } from '@angular/core';
import {ProprietairefondService} from "../service/proprietairefond.service";
import {data} from "jquery";
import {Proprietaire} from "../model/proprietaire";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // @ts-ignore
  private currentType: Proprietaire ;
 proprietairefond: any;
  listeproprietaire: any=[];


  constructor(private  proprietairefondService:ProprietairefondService,private router:Router,
              ) { }

  ngOnInit(): void {
  }


  ajoutecontact(data: any) {
    this.proprietairefondService.saveProprietaireFond(data).subscribe(res=>{
      this.currentType=res;

    },err=>{
      console.log(err);
    })
this.getProprietaireFondliste();
  }
  getProprietaireFondliste(){
    this.proprietairefondService.getAllProprietaireFond().subscribe(data => {
      //console.error(data)
      this.proprietairefond =data
      this.listeproprietaire = data
    });

  }

  envoyermail() {
    this.router.navigateByUrl("/envoyermaaaiiiilll")
  }
}
