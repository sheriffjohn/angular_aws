import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  private apiKey = environment.apiKey;
  private countryCode = environment.countryCode

  constructor(private http: HttpClient) {
  }

  getWeatherDataByCity(city: string): any {
    const url = `api.openweathermap.org/data/2.5/weather?q=${city},${this.countryCode}&appid='${this.apiKey}&units=metric`;

    return this.http.get(url).map(res => res);
  }
}
