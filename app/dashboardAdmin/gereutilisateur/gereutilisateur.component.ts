import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../service/type.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {UtilisateurService} from "../../service/utilisateur.service";

@Component({
  selector: 'app-gereutilisateur',
  templateUrl: './gereutilisateur.component.html',
  styleUrls: ['./gereutilisateur.component.css']
})
export class GereutilisateurComponent implements OnInit {
  selectlogement: any;
  selectedOption: any;
  listeType: any;
  prix: any;
  distance: any;
  age: any;
  fonctiondappartenance: any;

  constructor( private typService: TypeService ,
               private modalService: NgbModal,
               public dialog: MatDialog,
               private router: Router) { }

  ngOnInit(): void {
    this.getTypeList();
    // console.error(this.listeType);
    //console.log("avant"+this.selectedOption)
    //console.log("apres"+this.selectedOption)
  }
  getTypeList() {
    this.typService.getTypesList().subscribe(data => {
      //console.error(data)
      this.listeType=data

    });}

  rechche() {

  }
}
