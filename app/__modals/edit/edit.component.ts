import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../service/utilisateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
nom :any
  prenom:any;
  telephone:any;
  mail:any;
  role:any;
  password:any;
 currentType: any;
  proprieetairefond: any;
  patient: any;
  action="login"
  passwordlogin:any;
  email:any;
  listcoordonnes:any


  constructor(private utilisateurService:UtilisateurService,
              private router:Router) { }

  ngOnInit(): void {console.log("helo")

  }

  creeCompter(data: any) {console.log(data)
   console.log(this.mail+this.telephone+this.nom+this.password+this.role+this.prenom)
    this.utilisateurService. saveUtilisateur(data)
      .subscribe(res=>{
        this.currentType=res;

      },err=>{
        console.log(err);
      })
//this.router.navigateByUrl("/edit")
  }


  connect() {
    this.listcoordonnes=this.email+','+this.passwordlogin;
    this.utilisateurService.connection(this.listcoordonnes).subscribe(
      data=>{console.log(data)}
    )


    console.log(this.email+this.passwordlogin)
  }
}
