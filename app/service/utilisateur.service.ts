import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Proprietaire} from "../model/proprietaire";
import {Utilisateur} from "../model/utilisateur";



@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  public host:String="http://localhost:8080/api";
  private http: any;

  constructor(private httpClient: HttpClient) { }
  public getUtilisateurDetails(utilisateurId: string): Observable<Proprietaire> {
    return this.httpClient.get( this.host+ '/Utilisateur/'+utilisateurId );
  }
  public getAllUtilisateur() {
    return this.httpClient.get(this.host+"/utilisateurs") ;
  }
  saveUtilisateur( data:any) :Observable<Utilisateur>{
    return this.httpClient.post(this.host +'/save',data );
  }
  public updateUtilisateur(utilisateurId:String,value:any):Observable<Object> {
    return this.httpClient.put(this.host+'/'+utilisateurId+'/update',value);
  }
  deleteUtilisateur( utilisateurId: any ){
    return this.httpClient.delete(this.host +'/utlisateur/'+utilisateurId);
  }
  public connection(coordonnes:any) {
    return this.httpClient.get(this.host+'/login/'+coordonnes) ;
  }
}
