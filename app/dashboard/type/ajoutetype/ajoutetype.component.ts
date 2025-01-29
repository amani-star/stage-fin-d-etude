import {Component, OnInit} from '@angular/core';
import {TypeService} from "../../../service/type.service";
import {Router} from "@angular/router";
import {Type} from "../../../model/type";


@Component({
  selector: 'app-ajoutetype',
  templateUrl: './ajoutetype.component.html',
  styleUrls: ['./ajoutetype.component.css']
})
export class AjoutetypeComponent implements OnInit {
  public currentType!: Type ;
  public mode: number=1;

  constructor( private typeService:TypeService ,private router:Router) { }

  ngOnInit(): void {
  }

  saveType(data: any) {
    this.typeService.saveType(data)
      .subscribe(res=>{ console.log('rslt')

      },err=>{console.log('ertsts')
        console.log(err);
      })
    this.router.navigateByUrl('type')

  }

  onNouveauType() {
    this.mode=1;
  }
}
