import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeService} from "../../service/type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  public type: any;
  constructor(private typService: TypeService ,private router:Router) {
  }

 ngOnInit(): void {
   this.typService.getTypeList()
     .subscribe(data => {
         console.log(data)
         this.type = data;
       }
       , err => {
         console.log(err)
       })

 }

  onGetType() {
    this.router.navigateByUrl('/ajoutetype')
  }

 deleteType(p: any) {console.log(p.documentId)
    let conf = confirm(("Etes vous sure?"));
    /*this.typService.deleteType(p.documentId).subscribe(
      (resp?:any)=>{
        console.log(resp);
        this.onGetType();
      },(err?:any)=>{
        console.log(err);
      }
    )*/

    if (conf) {
      this.typService.deleteType(p.documentId).subscribe((data:any) => {
          console.log("tttt")
        },(err:any)=> {
          console.error(err);
        })
    }
  }

  updateType(p:any) {
    let url=p.updateType.documentId;
  this.router.navigateByUrl("/modifiertype/"+btoa(url));

  }

}
