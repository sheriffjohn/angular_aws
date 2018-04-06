import { Component, OnInit, Input } from '@angular/core';
import IconMappings from '../utils/iconMappings';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  providers: [WeatherService]
})
export class MainDisplayComponent implements OnInit {

  @Input() cod: number;
  @Input() temp: number;
  @Input() windspeed: number;
  @Input() winddeg: number;
  @Input() description: string;


  weatherIcon: string;
  weatherData: {};

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.weatherIcon = IconMappings[this.cod];

    this.service.getWeatherDataByCity('gothenburg').subscribe((data) => {
      this.weatherData = data;
      console.log(data);
    });
  }
}
