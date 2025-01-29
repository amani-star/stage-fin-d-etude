import { Component, OnInit } from '@angular/core';
import {FondImmobilierService} from "../../service/fond-immobilier.service";
import {Router} from "@angular/router";
import {TypeService} from "../../service/type.service";

@Component({
  selector: 'app-fond-immobilier',
  templateUrl: './fond-immobilier.component.html',
  styleUrls: ['./fond-immobilier.component.css']
})
export class FondImmobilierComponent implements OnInit {
  fondImmobilier: any;
   listeFondImmobilier: any;
   listeType:any;

  constructor( private fondImmobilierService:FondImmobilierService,
               private router:Router, private typeService:TypeService) { }

  ngOnInit(): void {
    this.getAllFondImmobilier();
    this.getlistetypenom()

  }
  /* pour affiche le liste de fond immobilier*/
  getAllFondImmobilier() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
      //console.error(data)
      this.fondImmobilier=data;
       this.listeFondImmobilier=data;
    });

  }
  getlistetypenom(){
    this.typeService.getTypeList().subscribe(data=>{
      this.listeType=data;
    })
  }

  deleteFond(item: any) {
    let conf = confirm(("Etes vous sure?"));
    if (conf) {console.log(this.fondImmobilier)
      this.fondImmobilierService.deleteFondImmobilier(item.fondId).subscribe(data => {
      },err=>{
        this.getAllFondImmobilier()})}

  }

  ajoutenouveaufond() {
    this.router.navigateByUrl("/dashboardAdmin/ajoutenewfondimmobilier")

  }

  Modifierfond(item: any) {
    this.router.navigateByUrl("/dashboardAdmin/modifierfondimmobilier/"+item.fondId);


  }
}
