import { Component, OnInit } from '@angular/core';
import {FondImmobilie} from "../../../../model/fond-immobilie";
import {ActivatedRoute, Router} from "@angular/router";
import {FondImmobilierService} from "../../../../service/fond-immobilier.service";

@Component({
  selector: 'app-detailcomplexe',
  templateUrl: './detailcomplexe.component.html',
  styleUrls: ['./detailcomplexe.component.css']
})
export class DetailcomplexeComponent implements OnInit {
  id: any;
  fondImmobilier= new FondImmobilie();
  private conf: any;
  item: any;
  private fondId: any;
  constructor(private router:Router,private activated:ActivatedRoute,
              private fondImmobilierService:FondImmobilierService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {this.id = this.route.snapshot.paramMap.get('id')
    console.log("id",this.id)
    this.getSelectFond();
  }



  private getSelectFond() {
    this.fondImmobilierService.getFondImmobilierDetails(this.id).subscribe(
      data =>{
        this.fondImmobilier=data
        console.log("data",data)

      })

  }
  retoure() {    this.router.navigateByUrl("/dashboardAdmin/complexefloue")
    this.getSelectFond();


  }
}
