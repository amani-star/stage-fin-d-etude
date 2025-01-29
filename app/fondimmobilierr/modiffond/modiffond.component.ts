import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TypeService} from "../../service/type.service";
import {FondImmobilierService} from "../../service/fond-immobilier.service";

@Component({
  selector: 'app-modiffond',
  templateUrl: './modiffond.component.html',
  styleUrls: ['./modiffond.component.css']
})
export class ModiffondComponent implements OnInit {
  fondImmobilier: any;
  type: any;
  id: any;

  constructor(private  router :Router, private  activatedRouter:ActivatedRoute,
              private typeservice:TypeService, private fondImmobilierService:FondImmobilierService) { }

  ngOnInit(): void {
    //console.log(this.activatedRouter.snapshot.params['documentId']);
    this.id=this.activatedRouter.snapshot.params['fondId'];

    this.fondImmobilierService.getFondImmobilierDetails(this.id).subscribe(data=>{
      this.fondImmobilier=data;
      this.typeservice.getTypeById(this.fondImmobilier.documentId).subscribe(data=>{
        this.type=data;


      }, error => {

      })
    }, error => {})
  }

  updatefond() {
    /*  this.typeservice.updateType(this.id ,this.type)
     .subscribe(data=>{

       },err=>{
         console.log(err)
       }
     )*/
    this.fondImmobilierService.updateFondImmobilier(this.id ,this.fondImmobilier)
      .subscribe(data=>{

        },err=>{
          console.log(err)
        }
      )
    this.router.navigate(['/fondimmobilierr'])
  }
}
