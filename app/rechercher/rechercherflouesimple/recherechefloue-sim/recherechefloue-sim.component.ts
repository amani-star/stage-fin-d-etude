import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TypeService} from "../../../service/type.service";
import {FondImmobilierService} from "../../../service/fond-immobilier.service";

@Component({
  selector: 'app-recherechefloue-sim',
  templateUrl: './recherechefloue-sim.component.html',
  styleUrls: ['./recherechefloue-sim.component.css']
})
export class RecherechefloueSimComponent implements OnInit {
  listeimmobrechercher: any;
  nomType: any;
  selectlogement: any;
 selectedOption: any;
 prix: any;
 distance: any;
 age: any;
listeparmtest: any;

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

    this.typeService.getTypeById(this.selectedOption).subscribe(
      data=>{
        this.nomType=data.nom;
      }
    )

    //this.listeparmtest=this.prixmax+','+this.prixmin+','+this.agemax+','+this.agemin+','+this.distancemax+','+this.distancemin;
    //this.listeparmtest=500+","+200+","+8+","+5+","+30+","+10;
    this.listeparmtest=this.prix.toString()+','+this.age.toString()+','+this.distance.toString()+','+this.selectedOption.toString()+','+this.selectlogement;
    console.error(this.listeparmtest)
    //this.listeparam.push(this.prixmax,this.prixmin,this.agemax,this.agemin,this.distancemax,this.distancemin)
    //console.error(this.listeparam)
    this.fondImmobilierService.getAllImoblerRechercheFlousSimple(this.listeparmtest)
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
    this.router.navigateByUrl("/rechercherflouesimple")
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
