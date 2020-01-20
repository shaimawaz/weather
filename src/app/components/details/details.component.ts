import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details;
  temp;
  today;
  icon;
  constructor(private route: ActivatedRoute, private _apiservice: ApiService, private router: Router) { }

  getdate(date) {
    this.temp = new Date(date);
    this.today = new Date();
    if (this.temp.getDate() == this.today.getDate()) {
      return "Today";
    }
    else if (this.temp.getDate() == this.today.getDate() + 1) {
      return "Tomorrow";
    }
    var dayName = this.dateFormat(this.temp);
    return dayName;

  }
  dateFormat(date) {
    // date = new Date(date);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[date.getDay()];
    return dayName + " " + day + "/" + month;
  }
  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this._apiservice.getdetails(name).subscribe(d => { this.details = d; console.log(d) });
    this.icon = environment.iconurl;
  }

}
