import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {data} from "jquery";
import {FondImmobilierService} from "../../../../service/fond-immobilier.service";
import {FondImmobilie} from "../../../../model/fond-immobilie";

@Component({
  selector: 'app-detailstype',
  templateUrl: './detailstype.component.html',
  styleUrls: ['./detailstype.component.css']
})
export class DetailstypeComponent implements OnInit {
    id: any;
    fondImmobilier= new FondImmobilie();
  private conf: any;
  item: any;
  private fondId: any;

  constructor(private activated:ActivatedRoute,
              private router:Router,
              private fondImmobilierService:FondImmobilierService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log("id",this.id)
    this.getSelectFond();
 }

   getSelectFond(){
this.fondImmobilierService.getFondImmobilierDetails(this.id).subscribe(
data =>{
  this.fondImmobilier=data
  console.log("data",data)
}
)
  }

  retoure() {
    this.router.navigateByUrl("/dashboardAdmin/rechercheclassique")
    this.getSelectFond();
}

/* louer(item:any) {
    let conf = confirm(("Etes vous sure?"));
    if (conf) {console.log(this.fondImmobilier)
      this.fondImmobilierService. deleteFondImmobilier(this.fondId).subscribe(data => {
        console.log(data)
      },err=> {
        // this.getTypeList()})}}

      })


  }

*/}

