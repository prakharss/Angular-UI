import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Providerdata } from '../providerdata';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  providername : String;
  compliance : Number;
  noncompliance : Number;
  index : Number;
  providerdata : Providerdata;

  constructor(private httpClient : HttpClient, private router : Router) { }

  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/dashboard']);
  }

  addData(data){this.router.navigate(['/dashboard'])};

  addUser(e){
    e.preventDefault();
    this.providername = e.target.elements[0].value;
    this.compliance = e.target.elements[1].value;
    this.noncompliance = e.target.elements[2].value;
    this.httpClient.post('http://localhost:8083/add',{providername : this.providername,compliance : this.compliance, noncompliance : this.noncompliance}).
    subscribe(data => {this.addData(data)});  
    };

  }

