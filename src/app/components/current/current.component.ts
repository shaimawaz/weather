import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LocstionService } from './../../services/locstion.service';
import { environment } from './../../../environments/environment';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  public data = {};
  public position = {};
  icon = "";
  forecast;
  private temp;
  public today = new Date();
  constructor(private _locationservice: LocstionService, private _apiservice: ApiService) { }

  gettoday() {
    return this.today;
  }
  getdate(date) {
    this.temp = new Date(date);
    this.today = new Date();
    if (this.temp.getDate() == this.today.getDate() + 1) {
      return "Tmrw";
    }
    var dayName = this.temp.toString().split(' ')[0];
    return dayName;

  }

  ngOnInit() {
    this._locationservice.getPosition().then(pos => {
      this.position = pos;
      this._apiservice.getdata(pos.lat, pos.lng).subscribe(d => this.data = d);
      this._apiservice.getforecast(pos.lat, pos.lng).subscribe(d => this.forecast = d);
      this.icon = environment.iconurl;
      console.log(this.position);
    });

  }

}
