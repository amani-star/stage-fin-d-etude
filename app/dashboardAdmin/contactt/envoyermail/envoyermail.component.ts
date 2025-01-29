import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../../service/type.service";
import {AdminmailService} from "../../../service/adminmail.service";

@Component({
  selector: 'app-envoyermail',
  templateUrl: './envoyermail.component.html',
  styleUrls: ['./envoyermail.component.css']
})
export class EnvoyermailComponent implements OnInit {
  adminmail: any;
 listadminmail: any;
  item: any;
currentType: any;

  constructor( private adminmailService: AdminmailService,) { }

  ngOnInit(): void {
    this.getadminmaillist()
  }
  getadminmaillist() {
    this.adminmailService.getAdminmzilList().subscribe(data => {
      //console.error(data)

      this.adminmail =data;
      this.listadminmail = data;
    });


  }



  Envoyer(data: any) {console.log(data)
    this.adminmailService.saveAdminmail(data).subscribe(res=>{
      this.currentType=res;

    },err=>{
      console.log(err);
    })
    this.getadminmaillist();
  }

}
