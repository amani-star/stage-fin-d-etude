import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../model/type";
import {Fonctiondappartenance} from "../model/fonctiondappartenance";

@Injectable({
  providedIn: 'root'
})
export class FonctiondappartenanceService {
  public host:String="http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }
  public getfonctionById(fonctionId: string): Observable<Fonctiondappartenance> {
    return this.httpClient.get( this.host+fonctionId );
  }

  public getFonctionList() {
    return this.httpClient.get(this.host+"/fonctions") ;
  }

  saveFonction( data:any) :Observable<Fonctiondappartenance>{
    return this.httpClient.post(this.host +'/Fonction',data );
  }

  public updateFonction(fonctionId:String,value:any):Observable<Object> {
    return this.httpClient.put(this.host+'/'+fonctionId+'/Update',value);
  }
  deleteType( fonctionId: any ){
    return this.httpClient.delete(this.host +'/deletefonction/'+fonctionId);
  }
}
