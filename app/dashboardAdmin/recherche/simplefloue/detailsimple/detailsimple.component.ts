import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FondImmobilie} from "../../../../model/fond-immobilie";
import {FondImmobilierService} from "../../../../service/fond-immobilier.service";

@Component({
  selector: 'app-detailsimple',
  templateUrl: './detailsimple.component.html',
  styleUrls: ['./detailsimple.component.css']
})
export class DetailsimpleComponent implements OnInit {
  id: any;
  fondImmobilier= new FondImmobilie();
  private conf: any;
  item: any;
  private fondId: any;

  constructor( private router:Router,private activated:ActivatedRoute,
               private fondImmobilierService:FondImmobilierService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log("id",this.id)
    this.getSelectFond();
  }


  private getSelectFond() {
    this.fondImmobilierService.getFondImmobilierDetails(this.id).subscribe(
      data =>{
        this.fondImmobilier=data
        console.log("data",data)

  })}

  retoure() {

    this.router.navigateByUrl("/dashboardAdmin/simplefloue")
    this.getSelectFond();
  }
}
