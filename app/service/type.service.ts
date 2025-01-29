import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../model/type";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  public host:String="http://localhost:8080/api";
  private http: any;


  constructor(private httpClient: HttpClient) {
  }

 public getTypeById(documentId: string): Observable<Type> {
    return this.httpClient.get( this.host+ '/get/'+documentId );
  }

   public getTypeList() {
    return this.httpClient.get(this.host+"/types") ;
  }

  saveType( data:any) :Observable<Type>{
    return this.httpClient.post(this.host +'/Type',data );
  }

 public updateType(documentId:String,value:any):Observable<Object> {
    return this.httpClient.put(this.host+'/'+documentId+'/updatetype',value);
  }
  public  getRessource(url:any):Observable<Type>{
    return this.httpClient.get(url);}
 deleteType( documentId: any ){
    return this.httpClient.delete(this.host +'/deleteType/'+documentId);
  }
 /*public deleteType(p:any) {
    return this.httpClient.delete(this.host+'/deleteType/{documentId}');
  }*/
 /* deleteType( documentId: any ) {
    return this.http.delete(this.host +'/deleteType/{documentId}'+documentId);
  }*/
 getTypesList(): Observable<Type> {
    return this.httpClient.get(environment.api + '/types');
  }
/* postType(newtype:Type) {
    return this.httpClient.post<Type>(environment.api + '/saveType', newtype);
  }*/
}
