import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../../service/type.service";
import {FondImmobilierService} from "../../../service/fond-immobilier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-complexefloue',
  templateUrl: './complexefloue.component.html',
  styleUrls: ['./complexefloue.component.css']
})
export class ComplexefloueComponent implements OnInit {
  listeType: any;
  selectedOption: any;
  selectlogement:any;
  listeimmobrechercher:any;
  nomType:any;
  prix:any ;
  age:any;
  distance:any;
  listeparmtest:any;
  termelogique="OU";
  fondImmobilier: any;
  listeFondImmobilier: any;
  constructor( private typeService: TypeService, private fondImmobilierService:FondImmobilierService,
               private router:Router) { }

  ngOnInit(): void {
    this.getTypeList();

  }
  getTypeList() {
    this.typeService.getTypesList().subscribe(data => {
      //console.error(data)
      this.listeType=data

    });}

  rechcheflouesimpleFonImmoblie() { console.log(this.termelogique)

    this.typeService.getTypeById(this.selectedOption).subscribe(
      data=>{
        this.nomType=data.nom;
      }
    )
      if(this.prix === undefined){

      this.listeparmtest=''+','+this.age.toString()+','+this.distance.toString()+','+this.termelogique+','+this.selectedOption.toString()+','+this.selectlogement;

    }
    else if(this.distance=== undefined){
      this.listeparmtest=this.prix+','+this.age.toString()+','+''+','+this.termelogique+','+this.selectedOption.toString()+','+this.selectlogement;

    }else{
      this.listeparmtest=this.prix+','+''+','+this.distance.toString()+','+this.termelogique+','+this.selectedOption.toString()+','+this.selectlogement;

    }
    console.error(this.listeparmtest)

    this.fondImmobilierService.getAllImoblerRechercheFlousCompexe(this.listeparmtest)
      .subscribe(data=>{
        this.listeimmobrechercher=data;
        console.log(this.listeimmobrechercher);

      })
  }



  annulerrechercherFloueSimple() {
    this.selectedOption=null
    this.selectlogement=null
    this.distance=null
    this.age=null
    this.prix=null
    this.listeimmobrechercher=null;

  }

  onItemchange(terme: any) {
this.termelogique=terme;  }

  detail(item: any) {
    this.router.navigateByUrl('/dashboardAdmin/detailcomplexe/:fondId')


  }

  changeStatus(data:any) {
    console.log(data)
    this.fondImmobilierService.updatelogementsatuts(data).subscribe(
      dd=>{console.log(dd)}
    )
    this.getAllFondImmobilier();
    this.getTypeList();
  }
  getAllFondImmobilier() {
    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(data => {
      //console.error(data)

      this.fondImmobilier=data;
      this.listeFondImmobilier=data;
    });


  }
}

