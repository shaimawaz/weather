import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LocstionService } from './../../services/locstion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText;
  cities;

  constructor(private _locationservice: LocstionService, private _apiservice: ApiService, private router : Router) { }

  ngOnInit() {
    this._locationservice.getPosition().then(pos => {
      this._apiservice.getcities(pos.lat, pos.lng).subscribe(d => this.cities = d );
    });
  }
  onselect(name){
    this.router.navigate(['/details',name]);
  }

}
