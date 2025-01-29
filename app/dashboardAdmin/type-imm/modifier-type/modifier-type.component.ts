import {Component, OnInit, Type} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TypeService} from "../../../service/type.service";

@Component({
  selector: 'app-modifier-type',
  templateUrl: './modifier-type.component.html',
  styleUrls: ['./modifier-type.component.css']
})
export class ModifierTypeComponent implements OnInit {
  public currentType: any;

   id:any ;
  type: any;

  constructor(private  router :Router, private  activatedRouter:ActivatedRoute,
              private typeservice:TypeService) { }

  ngOnInit(){
    console.log(this.activatedRouter.snapshot.params['documentId']);
 this.id=this.activatedRouter.snapshot.params['documentId'];
    this.typeservice.getTypeById(this.id).subscribe(data=>{
      this.type=data;

    }, error => {})
  }


  updateType() {

    this.typeservice.updateType(this.id ,this.type)
      .subscribe(data=>{

        },err=>{
        console.log(err)
        }
      )
    this.router.navigate(['/dashboardAdmin/type'])

  }
}
