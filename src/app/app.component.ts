import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  city: string;

  cod: number;
  weatherIcon: string;
  weatherData: any;
  weatherForecastData: Array<any> = new Array<any>();

  constructor(private service: WeatherService) {
  }

  ngOnInit() {
    this.loadCity('göteborg');
  }

  getDay(datetime: string) {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[new Date(datetime).getDay()];
  }

  loadCity(city: any) {
    this.city = city;

    this.service.getWeatherDataByCity(city.toString()).subscribe((data) => {
      this.weatherData = data;
      this.cod = data.weather[0].id;

      console.log('weatherData', this.weatherData);
    });

    this.service.getWeatherForecastDataByCity(city.toString()).subscribe((data) => {
      this.weatherForecastData = this.removeDuplicates(data.list, 'dt_txt');

      console.log('weatherForecastData', this.weatherForecastData);
    });
  }

  private removeDuplicates(originalArray, objKey) {
    var trimmedArray = [];
    var values = [];
    var value;

    for (var i = 0; i < originalArray.length; i++) {
      value = originalArray[i][objKey];

      if (values.indexOf(this.getDay(value)) === -1) {
        trimmedArray.push(originalArray[i]);
        values.push(this.getDay(value));
      }
    }

    return trimmedArray;

  }
}

