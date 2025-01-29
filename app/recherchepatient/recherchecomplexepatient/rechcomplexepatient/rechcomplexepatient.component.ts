import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TypeService} from "../../../service/type.service";
import {FondImmobilierService} from "../../../service/fond-immobilier.service";

@Component({
  selector: 'app-rechcomplexepatient',
  templateUrl: './rechcomplexepatient.component.html',
  styleUrls: ['./rechcomplexepatient.component.css']
})
export class RechcomplexepatientComponent implements OnInit {
  listeimmobrechercher: any;
  nomType: any;
  selectlogement: any;
  selectedOption: any;
  prix: any;
  distance: any;
  age: any;
  listeparmtest: any;
  termelogique:any;
  navbarCollapsed: any;
  listeFondImmobilier: any;
  listeType: any;
   fondImmobilier: any;
  constructor(private router: Router,private activated: ActivatedRoute,private route: ActivatedRoute,
              private typeService:TypeService,private fondImmobilierService: FondImmobilierService) { }

  ngOnInit(): void {
    this.selectlogement = this.route.snapshot.paramMap.get('selectlogement')
    this.selectedOption = this.route.snapshot.paramMap.get('selectedOption')
    this.prix = this.route.snapshot.paramMap.get('prix')
    this.distance = this.route.snapshot.paramMap.get('distance')
    this.age = this.route.snapshot.paramMap.get('age')
    this.termelogique=this.route.snapshot.paramMap.get('termelogique')

    this.typeService.getTypeById(this.selectedOption).subscribe(
      data=>{
        this.nomType=data.nom;
      }
    )

    if(this.prix === "empty"){

      this.listeparmtest=''+','+this.age.toString()+','+this.distance.toString()+','+this.termelogique+','+this.selectedOption.toString()+','+this.selectlogement;

    }
    else if(this.distance=== "empty"){
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

  getTypeList() {
    this.typeService.getTypesList().subscribe(data => {
      //console.error(data)
      this.listeType=data

    });}
}
