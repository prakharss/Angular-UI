import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http  } from '@angular/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { User } from '../user';
import { DataService } from '../data.service';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isValid : boolean = false;
  details2: String;

  constructor(private router : Router, private http : Http, private httpClient : HttpClient, public dataService : DataService) { }

  ngOnInit() {
    
  }

  
  httpdata;
  public message : String = "abc";
  public username : String;
  password : String;



  displaydata(data) {this.httpdata = data;
    console.log(this.httpdata);
    if (this.httpdata == 'true')
    {
      console.log('Success');
      this.router.navigate(['/dashboard']);
      this.dataService.setSharedData('username', this.username);
      // ,{queryParams: {username: this.username}}
    }
    else {
      console.log('Wrong Credentials')
      this.isValid = true;
    }
    return false;
  };

  loginUser(e){
    e.preventDefault();
    console.log(e);
    this.username = e.target.elements[0].value;
    this.password = e.target.elements[1].value;
    this.httpClient.post('http://localhost:8083/login',([this.username,this.password])).map(Response => Response.toString()).
    subscribe(data => {this.displaydata(data)});
    };    
  }

