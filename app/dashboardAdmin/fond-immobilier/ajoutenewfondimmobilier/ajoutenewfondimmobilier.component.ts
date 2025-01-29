import {Component, OnInit, Type} from '@angular/core';
import {TypeService} from "../../../service/type.service";
import {data} from "jquery";
import {Router} from "@angular/router";
import {FondImmobilierService} from "../../../service/fond-immobilier.service";

@Component({
  selector: 'app-ajoutenewfondimmobilier',
  templateUrl: './ajoutenewfondimmobilier.component.html',
  styleUrls: ['./ajoutenewfondimmobilier.component.css']
})
export class AjoutenewfondimmobilierComponent implements OnInit {
  listeType: any;
  // @ts-ignore
  private currentType:Type;
 fondImmobilier: any;
 listeFondImmobilier: any;
  selectlogement: any;
  selectedOption: any;


  constructor(private typeService:TypeService,
              private fondImmobilierService:FondImmobilierService,
              private router:Router) { }

  ngOnInit(): void {
    this.getTypeList();
  }


  getTypeList() {
    this.typeService.getTypesList().subscribe(data => {
      console.error(data)
      this.listeType=data});
  }

  onsavefondimmobilier(data: any) { console.log(data)

    this.fondImmobilierService. saveFondImmobilier(data)
      .subscribe(res=>{
        this.currentType=res;

      },err=>{
        console.log(err);
      })
   this.router.navigateByUrl("/dashboardAdmin/fondImmobilier")
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

