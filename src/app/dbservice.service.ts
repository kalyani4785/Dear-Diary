import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http: HttpClient) { }
  url: any ="http://localhost:3000/posts";
  
 
  getPostDetail():Observable<any>{
    console.log(this.url);
    return this.http.get<any>(this.url);
  }
}
