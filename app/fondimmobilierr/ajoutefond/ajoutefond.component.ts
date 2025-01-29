import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../service/type.service";
import {FondImmobilierService} from "../../service/fond-immobilier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajoutefond',
  templateUrl: './ajoutefond.component.html',
  styleUrls: ['./ajoutefond.component.css']
})
export class AjoutefondComponent implements OnInit {
  selectlogement: any;
  selectedOption: any;
  listeType: any;
 currentType: any;
fondImmobilier: any;
 listeFondImmobilier: any;

  constructor(private typeService:TypeService,
              private fondImmobilierService:FondImmobilierService,
              private router:Router) { }

  ngOnInit(): void {
    this.getTypeList();

  }

  onsavefondimmobilier(data: any) {
    this.fondImmobilierService. saveFondImmobilier(data)
      .subscribe(res=>{
        this.currentType=res;

      },err=>{
        console.log(err);
      })
    this.router.navigateByUrl("/fondimmobilierr")
    this.getAllFondImmobilier();
    this.getTypeList();

  }

  private getTypeList() {
    this.typeService.getTypesList().subscribe(data => {
      console.error(data)
      this.listeType=data});
  }

  private getAllFondImmobilier() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
      //console.error(data)

      this.fondImmobilier=data;
      this.listeFondImmobilier=data;
    });
  }
}
