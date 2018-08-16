import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';
import { Http } from '@angular/http';

import { ControllerService } from '../controller.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  providers: Observable<any[]>;
  columns: string[];
  
  constructor(private atService: DataService, private http : Http, private controller : ControllerService) { }

  showGoogle(){
    console.log('Google');
    let obs = this.http.get('http://localhost:8083/hi');
    obs.subscribe((response) => console.log(response));
  }

  details: String;
  details2: String;

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.providers = this.atService.getProviders();
    this.controller.getDetails().subscribe(Response=> {this.details = Response.text()} );
  }


  onClick(){
    this.controller.postDetails().subscribe(Response=> {this.details2 = Response.text()} );
  }
}
