import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 details;
  constructor(private route : ActivatedRoute, private _apiservice : ApiService) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this._apiservice.getdetails(name).subscribe(d => this.details = d );
  }

}
