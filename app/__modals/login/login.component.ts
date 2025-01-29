import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../service/utilisateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
check=false;
listeuser:any;
activebutton=false;
  constructor(private utilisateurService:UtilisateurService,
              private router:Router) { }

  ngOnInit(): void {//console.log("helo")

  }

  creeCompter(data: any) {console.log(data)
    if(data.nom==undefined|| data.prenom===undefined||data.mail==undefined||data.password==undefined||data.telephone==undefined||data.role==undefined ){
      let conf = confirm(("IL remplir tous les champs"));
 this.activebutton=false;

      if (conf){}
    }else{

    console.log(this.mail+this.telephone+this.nom+this.password+this.role+this.prenom)
    this.utilisateurService. saveUtilisateur(data)
      .subscribe(res=>{
        this.currentType=res;

      },err=>{
        console.log(err);
      })}
//this.router.navigateByUrl("/edit")
  }


  connect() {
    this.listcoordonnes=this.email+','+this.passwordlogin;
    //console.log(this.listcoordonnes)
    this.utilisateurService.connection(this.listcoordonnes).subscribe(
      data=>{
        this.listeuser=data;
        if(this.listeuser.length==0){

          this.check=true;
        }else{
console.log(data)
          this.check=false;
          this.listeuser.forEach((element: any) =>{
            if(element.role == "patient") {
              this.router.navigateByUrl("/patient")
            }else if(element.role == "admin"){this.router.navigateByUrl("/dashboardAdmin")}

            else {this.router.navigateByUrl("/proprietaire")}
          }
            )


        }}
    )


  //  console.log(this.email+this.passwordlogin)
  }
}
