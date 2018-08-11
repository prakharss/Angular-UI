import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';
import { Http } from '@angular/http';

let providers: Observable<any[]>;
let columns: string[];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  providers: Observable<any[]>;
  columns: string[];
  
  constructor(private atService: DataService, private http : Http) { }

  showGoogle(){
    console.log('Google');
    let obs = this.http.get('https://www.google.com');
    obs.subscribe((response) => console.log(response));
  }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.providers = this.atService.getProviders();
  }
}
