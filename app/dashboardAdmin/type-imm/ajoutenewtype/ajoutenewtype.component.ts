import {Component, OnInit, Type} from '@angular/core';
import {TypeService} from "../../../service/type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajoutenewtype',
  templateUrl: './ajoutenewtype.component.html',
  styleUrls: ['./ajoutenewtype.component.css']
})
export class AjoutenewtypeComponent implements OnInit {

  type: any;
  // @ts-ignore
  private currentType:Type;
  listeType: any = [];
  constructor(private  typeService:TypeService,
              private  router:Router) { }

  ngOnInit() {
  }

  onsaveType(data: any) {

    this.typeService.saveType(data)
      .subscribe(res=>{
        this.currentType=res;

      },err=>{
        console.log(err);
      })
  this.router.navigateByUrl("/dashboardAdmin/type")
this.getTypeList();
    }
  getTypeList() {
    this.typeService.getTypesList().subscribe(data => {
      //console.error(data)
      this.type =data
      this.listeType = data
    });


  }

}
