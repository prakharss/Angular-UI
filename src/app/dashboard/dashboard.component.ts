import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public username;
  public sharedData;
  isDropdown : boolean = true;

  showDropdown(){
    this.isDropdown = !this.isDropdown;
  }
  constructor(private route: ActivatedRoute, public dataService : DataService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {this.sharedData = this.dataService.getSharedData()});
    this.username = this.sharedData.username;
  }

}
