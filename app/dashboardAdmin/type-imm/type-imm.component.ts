import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Type} from "../../model/type";
import {TypeService} from "../../service/type.service";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {data, error} from "jquery";
import {Router} from "@angular/router";

import {MatDialog} from '@angular/material/dialog';


import { EditComponent } from '../../__modals/edit/edit.component';


@Component({
  selector: 'app-type-imm',
  templateUrl: './type-imm.component.html',
  styleUrls: ['./type-imm.component.css']
})
export class TypeImmComponent implements OnInit {

  newType = new Type();
  closeResult?: string;
  type:any;
  filter_data:any;
  filters={
  keyword:''
  }
  tailleInvalid?: boolean
  erreurMsg?: string;
  url?: string;
  objectEdit: any;
  objectDelete: any;
  listeType: any = [];


  constructor(
     private typService: TypeService,
     private modalService: NgbModal,
     public dialog: MatDialog,
     private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getTypeList();
  }


  openDialog() {
    const dialogRef = this.dialog.open(EditComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getTypeList() {
    this.typService.getTypesList().subscribe(data => {
      //console.error(data)

      this.type =data;
      this.listeType = data;
    });


  }

  open(content?: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

 /* addType() {
   this.newType.documentId="0"
    this.typService.postType(this.newType).subscribe(
      data => { console.error("entrrrrrrr")
        //this.Type = new Type();
        this.router.navigateByUrl('ashboardAdmin/type');
        //this.getTypeList();
      },
        error => console.log(error)
      )
  //  this.modalService.dismissAll();
  }*/
 /*onRecherche(form:any) {
    this.typService.getTypesList().subscribe(data => {
      this.listeType=data;
      this.Type=data;
    },err=>{
      console.log(err);
    });}*/


/*  filterType(type: Type) {
   return type.filter((e)=>{
     // @ts-ignore
     return e.type.toLowerCase().includes(this.listeType.keyword.toLowerCase())


})*/
  /*filterType(event:any) {
    //return type.filter
    let filter_input = event.target.value;

    if(filter_input){console.log(filter_input);}

  }*/
  item: any;
  deleteType(item: any) {
    let conf = confirm(("Etes vous sure?"));
    /*this.typService.deleteType(p.documentId).subscribe(
      (resp?:any)=>{
        console.log(resp);
        this.onGetType();
      },(err?:any)=>{
        console.log(err);
      }
    )*/

    if (conf) {console.log(this.type)
      this.typService.deleteType(item.documentId).subscribe(data => {
      },err=>{
        this.getTypeList()})}}

  ModifierType(item:any) {

    this.router.navigateByUrl("/dashboardAdmin/modifier-type/"+item.documentId);
    /*const dialogRef = this.matDialog.open(EditComponent, {
      height: 'auto',
      width: 'auto%',
    });*/



  }

  ajoutenouveautype() {
this.router.navigateByUrl("/dashboardAdmin/ajouternewtype")

  }
}
