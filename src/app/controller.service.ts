import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControllerService implements OnInit{
  public username;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {this.username = params.username});
  }

  getDetails() : Observable<any> {
    return this.http.get('http://localhost:8083/hi');
  }

  postDetails() : Observable<any> {
    return this.http.post('http://localhost:8083/hello',{id : 1,name : 'Aakanksha'});
    
  }

}
