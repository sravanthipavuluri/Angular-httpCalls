import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Users } from './users';

@Injectable()
export class DataserviceService {
  private subject = new Subject<any>();
  private postUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getData(id:number) {
      // console.log("In sendMessage*********************------"+this.postUrl+"/"+id);
       //Sample Url: https://api.github.com/users/seeschweiler
       if(id!=0){
            return this.http.get<Users[]>(this.postUrl+"/"+id);
       }else{
        return this.http.get<Users[]>(this.postUrl);
       }
   }

   clearMessage() {      
       this.subject.next({});
   }

   getDataObs(): Observable<Users[]> {
       return this.subject.asObservable();
   }

}
