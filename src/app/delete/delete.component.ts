import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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

  deleteData(){this.router.navigate(['/dashboard'])};

  yesDelete(){
    this.httpClient.post('http://localhost:8083/delete',(this.providername)).subscribe(data => {this.deleteData()}); 
    };

  noDelete(){
    this.router.navigate(['/dashboard']);
  }

}
