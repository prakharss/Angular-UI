import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  providername : String;
  compliance : Number;
  noncompliance : Number;
  public sharedData;

  constructor(private httpClient : HttpClient, private router : Router,private dataService : DataService) { }

  ngOnInit() {
    this.sharedData = this.dataService.getSharedData();
    this.providername = this.sharedData.providername;
    this.compliance = this.sharedData.compliance;
    this.noncompliance = this.sharedData.noncompliance;
  }


  editData(data){this.router.navigate(['/dashboard'])};

  editUser(e){
    e.preventDefault();
    this.providername = e.target.elements[0].value;
    this.compliance = e.target.elements[1].value;
    this.noncompliance = e.target.elements[2].value;
    this.httpClient.post('http://localhost:8083/edit',{providername : this.providername,compliance : this.compliance, noncompliance : this.noncompliance}).
    subscribe(data => {this.editData(data)});  
    };

    cancel(){
      this.router.navigate(['/dashboard']);
    }


}
