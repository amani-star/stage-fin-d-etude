import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../model/type";
import {Adminmail} from "../model/adminmail";

@Injectable({
  providedIn: 'root'
})
export class AdminmailService {
  public host:String="http://localhost:8080/api";
  private http: any;

  constructor(private httpClient: HttpClient) { }
  public getAdminmailById(adminmailId: string): Observable<Adminmail> {
    return this.httpClient.get( this.host+ '/getAdmin/'+adminmailId );
  }

  public getAdminmzilList() {
    return this.httpClient.get(this.host+"/admins") ;
  }

 saveAdminmail( data:any) :Observable<Adminmail>{
    return this.httpClient.post(this.host +'/Adminmail',data );
  }
  public updateAdminmail(adminmailId:String,value:any):Observable<Object> {
    return this.httpClient.put(this.host+'/'+adminmailId+'/updateadmin',value);
  }
  deleteAdminmail( adminmailId: any ){
    return this.httpClient.delete(this.host +'/deleteAdmin/'+adminmailId);
  }
}
