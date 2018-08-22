import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ControllerService } from '../controller.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  providers: Observable<any[]>;
  columns: string[];
  
  constructor(private dataService : DataService, private router : Router,private atService: DataService, private http : Http,private httpClient : HttpClient, private controller : ControllerService) { }

  // onShow(){
  //   console.log('data');
  //   let obs = this.http.get('http://localhost:8083/data');
  //   obs.subscribe((response) => console.log(response));
  // }

  details: String;
  details2: String;
  

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.providers = this.atService.getProviders();
    this.controller.getDetails().subscribe(Response=> {this.details = Response.text()} );
    this.httpClient.get('http://localhost:8083/data').map(Response => Response).subscribe(data => {this.table(data)});
  }
  tableData : String[];
  table(data) {this.tableData = data;console.log(this.tableData)};

  deleteData(){this.router.navigate(['/dashboard'])};

  onAdd(){
    console.log('add');
    this.router.navigate(['/dashboard/add']);
  };
  onEdit(providername,compliance,noncompliance){
    console.log(providername,compliance,noncompliance);
    this.dataService.setSharedData('providername', providername);
    this.dataService.setSharedData('compliance', compliance);
    this.dataService.setSharedData('noncompliance', noncompliance);
    this.router.navigate(['/dashboard/edit']);
  };
  onDelete(providername,compliance,noncompliance){
    this.dataService.setSharedData('providername', providername);
    this.dataService.setSharedData('compliance', compliance);
    this.dataService.setSharedData('noncompliance', noncompliance);
    this.router.navigate(['/dashboard/delete']);  
    };
  }

