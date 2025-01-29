import { Component, OnInit } from '@angular/core';
import {ProprietairefondService} from "../../service/proprietairefond.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contactt',
  templateUrl: './contactt.component.html',
  styleUrls: ['./contactt.component.css']
})
export class ContacttComponent implements OnInit {
  listeproprietaire: any;
  proprietairefond: any;

  constructor(private  proprietairefondService:ProprietairefondService,    private router: Router
              ) { }

  ngOnInit(): void {
    this.getAllcontact();

  }

  private getAllcontact() {
    this.proprietairefondService.getAllProprietaireFond().subscribe(data => {
      //console.error(data)
      this.proprietairefond=data;
      this.listeproprietaire=data;
    });
  }

  deleteconact(item: any) {
    let conf = confirm(("Etes vous sure?"));
    if (conf) {console.log(this.proprietairefond)
      this.proprietairefondService.deleteProprietaireFond(item.proprietaireId).subscribe(data => {
      },err=>{
        this.getAllcontact()})}

  }

  Envoyerunemail() {
    this.router.navigateByUrl("/dashboardAdmin/envoyermail")
  }
}
