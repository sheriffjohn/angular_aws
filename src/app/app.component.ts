import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  title = 'app';

  cod: number;
  weatherIcon: string;
  weatherData: any;

  constructor(private service: WeatherService) {
  }

  ngOnInit() {
    this.service.getWeatherDataByCity('gothenburg').subscribe((data) => {
      this.weatherData = data;
      this.cod = data.weather[0].id;
      console.log(data);
    });
  }
}

