import { Component, OnInit } from '@angular/core';
import {AdminmailService} from "../../service/adminmail.service";
import {data} from "jquery";

@Component({
  selector: 'app-envoyermaaaiiiilll',
  templateUrl: './envoyermaaaiiiilll.component.html',
  styleUrls: ['./envoyermaaaiiiilll.component.css']
})
export class EnvoyermaaaiiiilllComponent implements OnInit {
  adminmail: any;
  listeadminmail: any;

  constructor(private adminmailService: AdminmailService) { }

  ngOnInit(): void {
    this.recumail()
  }
recumail(){
    this.adminmailService.getAdminmzilList().subscribe(data => {
      //console.error(data)

      this.adminmail =data;
      this.listeadminmail = data;
    });
}
}
