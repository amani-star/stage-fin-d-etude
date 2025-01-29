import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Type} from "../model/type";
import {environment} from "../../environments/environment";
import {FondImmobilie} from "../model/fond-immobilie";

@Injectable({
  providedIn: 'root'
})
export class FondImmobilierService {
  public host:String="http://localhost:8080/api";
  constructor(private httpClient: HttpClient) {}
  public getFondImmobilierDetails(fondId: string): Observable<FondImmobilie> {
    return this.httpClient.get( this.host+ '/FondImmobilier/'+fondId );
  }
  public getAllFondImmobilierDetails(): Observable<FondImmobilie> {
    return this.httpClient.get(this.host+'/fonds');
  }
  public getAllFondImmobilier(listeparam:any){
    return this.httpClient.get(this.host+'/fondImmobilier/rechercheclassique/'+listeparam) ;
  }
  public getAllImoblerRechercheFlousSimple(listeparam:any){
    return this.httpClient.get(this.host+'/fondImmobilier/recherchefloussimple/'+listeparam) ;
  }

  saveFondImmobilier( data:any) :Observable<FondImmobilie>{
    return this.httpClient.post(this.host +'/FondImmobilier',data );
  }

  public updateFondImmobilier(fondId:String,value:any):Observable<Object> {
    return this.httpClient.put(this.host+'/'+fondId+'/updateFond',value);
  }
  deleteFondImmobilier( fondId: any ){
    return this.httpClient.delete(this.host +'/deleteFond/'+fondId);
  }
  /**/
  public getFondImmobilierDetailstest(fondId: string): Observable<FondImmobilie> {
    return this.getAllFondImmobilierDetails().pipe(

    )

  }

  getAllImoblerRechercheFlousCompexe(listeparmtest: any) {console.error(listeparmtest)
    return this.httpClient.get(this.host+'/fondImmobilier/rechercheflouscomplex/'+listeparmtest) ;

  }
  public updatelogementsatuts(data:any):Observable<Object> {
    return this.httpClient.put(this.host+'/updateLogemnt',data);
  }
}
