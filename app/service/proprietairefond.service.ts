import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../model/type";
import {Proprietaire} from "../model/proprietaire";


@Injectable({
  providedIn: 'root'
})
export class ProprietairefondService {
  public host:String="http://localhost:8080/api";
  private http: any;

  constructor(private httpClient: HttpClient) {}

  public getProprietaireFondDetails(proprietaireId: string): Observable<Proprietaire> {
    return this.httpClient.get( this.host+ '/ProprietaireFond/'+proprietaireId );
  }
  public getAllProprietaireFond() {
    return this.httpClient.get(this.host+"/ProprietaireFond") ;
  }
  saveProprietaireFond( data:any) :Observable<Proprietaire>{
    return this.httpClient.post(this.host +'/ProFond',data );
  }
  public updateProprietaireFond(proprietaireId:String,value:any):Observable<Object> {
    return this.httpClient.put(this.host+'/'+proprietaireId+'/updateProFond',value);
  }
  deleteProprietaireFond( proprietaireId: any ){
    return this.httpClient.delete(this.host +'/deleteProFond/'+proprietaireId);
  }
}
