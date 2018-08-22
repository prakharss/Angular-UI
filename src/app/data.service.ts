import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { PROVIDER } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProviders(): Observable<any[]>{
    return Observable.of(PROVIDER).delay(100);
  }
  getColumns(): string[]{
    return ["Provider", "Compliant", "Non-Compliant"]};

  private data = {};

  setSharedData(option, value){
    this.data[option] = value;
  }

  getSharedData(){
    return this.data;
  }
  
}
