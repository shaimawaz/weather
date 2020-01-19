import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient){ }

  getdata(lat,lng) :Observable<string>{
    console.log(lat+" "+lng)
    return this.http.get<string>(`${environment.baseurl}weather?lat=${lat}&lon=${lng}&units=metric&appid=${environment.ApiKey}`);
  }
  getforecast(lat,lng):Observable<string>{
    return this.http.get<string>(`${environment.baseurl}forecast?lat=${lat}&lon=${lng}&units=metric&appid=${environment.ApiKey}`);
  }
  getcities(lat,lng) :Observable<string>{
    return this.http.get<string>(`${environment.baseurl}find?lat=${lat}&lon=${lng}&cnt=15&appid=${environment.ApiKey}`)
  }
  
}
