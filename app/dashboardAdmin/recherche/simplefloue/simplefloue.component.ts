import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../../service/type.service";
import {FondImmobilierService} from "../../../service/fond-immobilier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-simplefloue',
  templateUrl: './simplefloue.component.html',
  styleUrls: ['./simplefloue.component.css']
})
export class SimplefloueComponent implements OnInit {
  listeType: any;
  selectedOption: any;
  selectlogement:any;
  listeimmobrechercher:any;
  nomType:any;
  prix:any ;
  age:any;
  distance:any;
 listeparmtest:any;
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

  rechcheflouesimpleFonImmoblie() {
    console.log(this.selectedOption)

    this.typeService.getTypeById(this.selectedOption).subscribe(
      data=>{
        this.nomType=data.nom;
      }
    )
    console.log(this.nomType)


    this.listeparmtest=this.prix.toString()+','+this.age.toString()+','+this.distance.toString()+','+this.selectedOption.toString()+','+this.selectlogement;
    console.error(this.listeparmtest)

    this.fondImmobilierService.getAllImoblerRechercheFlousSimple(this.listeparmtest)
      .subscribe(data=>{
        this.listeimmobrechercher=data;
        console.log(this.listeimmobrechercher);

      })}

  actualiserechercherFloueSimple() {

    this.fondImmobilierService.getAllFondImmobilierDetails().subscribe(
      data=>{console.log(data)}
    )
  }
 /* this.selectedOption=null
    this.prixmax= null
    this.prixmin=null
    this.agemax= null
    this.agemin= null
    this.distancemax = null
    this.distancemin = null
    this.listeimmobrechercher=null;*/
  annulerrechercherFloueSimple() {
    this.selectedOption=null
    this.selectlogement=null
this.distance=null
    this.age=null
    this.prix=null
  this.listeimmobrechercher=null;
  }

  details(item: any) {
    this.router.navigateByUrl('/detailsimple/:fondId')
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
