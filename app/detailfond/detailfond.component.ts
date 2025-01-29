import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FondImmobilierService} from "../service/fond-immobilier.service";

@Component({
  selector: 'app-detailfond',
  templateUrl: './detailfond.component.html',
  styleUrls: ['./detailfond.component.css']
})
export class DetailfondComponent implements OnInit {
  fondImmobilier: any;
  id: any;

  constructor(private router:Router,private route: ActivatedRoute,private fondImmobilierService:FondImmobilierService) { }

  ngOnInit(): void {
    //bch nejbed id men path (path maxjoud fil routing)
    this.id = this.route.snapshot.paramMap.get('id')
   // console.log("idgggggggggg",this.id)
    this.getSelectFond();
  }
  private getSelectFond() {
    this.fondImmobilierService.getFondImmobilierDetails(this.id).subscribe(
      data =>{
       this.fondImmobilier=data
    //  console.log("data",data)

      })}
  retoure() {

    this.router.navigateByUrl("")
    this.getSelectFond();
  }
}
