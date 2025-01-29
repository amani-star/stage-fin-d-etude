import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TypeService} from "../../../../service/type.service";
import {Type} from "../../../../model/type";

@Component({
  selector: 'app-modifiertype',
  templateUrl: './modifiertype.component.html',
  styleUrls: ['./modifiertype.component.css']
})
export class ModifiertypeComponent implements OnInit {
  public currentType: Type | undefined;
  private url: string | undefined;

  constructor( private router:Router,private activatedRoute:ActivatedRoute,
               private typeService:TypeService) { }

  ngOnInit(){
    this.url=atob(this.activatedRoute.snapshot.params['documentId']);
   this.typeService.getRessource(this.url)
     .subscribe((data:any)=>{
       this.currentType=data;
     },(err:any)=>{
       console.log(err);
     })
  }

 /*updateType(value: any) {
    this.typeService.updateType()
      .subscribe(data=>{
        alert("mise a jour")
      },err=>{
        console.log(err);
      })

  }*/
}
