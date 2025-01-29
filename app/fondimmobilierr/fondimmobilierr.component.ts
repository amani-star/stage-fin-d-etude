import { Component, OnInit } from '@angular/core';
import {FondImmobilierService} from "../service/fond-immobilier.service";
import {Router} from "@angular/router";
import {TypeService} from "../service/type.service";

@Component({
  selector: 'app-fondimmobilierr',
  templateUrl: './fondimmobilierr.component.html',
  styleUrls: ['./fondimmobilierr.component.css']
})
export class FondimmobilierrComponent implements OnInit {
  fondImmobilier: any;
  listeType: any;
   listeFondImmobilier: any;

  constructor(private fondImmobilierService:FondImmobilierService,
              private router:Router, private typeService:TypeService) { }

  ngOnInit(): void {
    this.getAllFondImmobilier();
    this.getlistetypenom()
  }

  private getAllFondImmobilier() {

    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
      //console.error(data)
      this.fondImmobilier=data;
      this.listeFondImmobilier=data;
    });
  }
  private getlistetypenom() {
    this.typeService.getTypeList().subscribe(data=>{
      this.listeType=data;
    })
  }
  ajoutenouveaufond() {
    this.router.navigateByUrl("/ajoutefond")

  }

  deleteFond(item: any) {
    let conf = confirm(("Etes vous sure?"));
    if (conf) {console.log(this.fondImmobilier)
      this.fondImmobilierService.deleteFondImmobilier(item.fondId).subscribe(data => {
      },err=>{
        this.getAllFondImmobilier()})}

  }

  Modifierfond(item: any) {
    this.router.navigateByUrl("/modiffond/"+item.fondId);

  }




}
