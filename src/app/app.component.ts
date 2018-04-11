import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './models/weather';
import { Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import * as weatherActions from './redux/actions/weather.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  city: string;
  cod: number;
  weatherData: Weather;
  weatherForecastData: Array<any> = new Array<any>();

  constructor(private service: WeatherService, private store: Store<AppState>) {
    this.subscriptions();
  }

  ngOnInit() {
    this.loadCity('göteborg');
  }

  subscriptions() {
  }

  getDay(datetime: string) {
    const weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    return weekday[new Date(datetime).getDay()];
  }

  loadCity(event: any) {
    this.city = event;

    this.service.getWeatherDataByCity(event.toString()).subscribe((data) => {
      this.weatherData = data;
      this.cod = data.weather[0].id;
      console.log('weatherData', this.weatherData);
    });

    this.service.getWeatherForecastDataByCity(event.toString()).subscribe((data) => {
      this.weatherForecastData = this.removeDuplicates(data.list, 'dt_txt');
      console.log('weatherForecastData', this.weatherForecastData);
    });
  }

  private removeDuplicates(originalArray, objKey) {
    const trimmedArray = [];
    const values = [];
    let value;

    for (let i = 0; i < originalArray.length; i++) {
      value = originalArray[i][objKey];

      if (values.indexOf(this.getDay(value)) === -1) {
        trimmedArray.push(originalArray[i]);
        values.push(this.getDay(value));
      }
    }

    return trimmedArray;

  }
}

