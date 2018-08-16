import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http: Http) { }

  getDetails() : Observable<any> {
    return this.http.get('http://localhost:8083/hi');
  }

  postDetails() : Observable<any> {
    return this.http.post('http://localhost:8083/hello',{id : 1,name : 'Aakanksha'});
    
  }
}
