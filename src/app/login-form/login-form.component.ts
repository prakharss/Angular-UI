import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isValid : boolean = false;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if (username == 'a' && password == 'a')
    {
      console.log('Success');
      this.router.navigate(['/dashboard']);
    }
    else {
      console.log('Wrong Credentials')
      this.isValid = true;
      console.log(this.isValid);
    }
    return false;
  }
}
