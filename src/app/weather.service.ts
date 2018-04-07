import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class WeatherService {

  private apiKey = environment.apiKey;
  private countryCode = environment.countryCode
  private errorMsg = 'failure';

  constructor(private http: HttpClient) {
  }

  getWeatherDataByCity(city: string): Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).catch(this.handleError);
  }

  getWeatherForecastDataByCity(city: string): Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : this.errorMsg;
    return Observable.throw(errMsg);
  }
}
