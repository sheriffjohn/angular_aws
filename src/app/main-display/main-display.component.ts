import { Component, Input, OnChanges } from '@angular/core';
import IconMappings from '../utils/iconMappings';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html'
})
export class MainDisplayComponent implements OnChanges {

  @Input() cod: number;
  @Input() city: string;
  @Input() temp: number;
  @Input() windspeed: number;
  @Input() winddeg: number;
  @Input() description: string;

  weatherIcon: string;
  windIcon: string;

  ngOnChanges() {
    this.weatherIcon = IconMappings[this.cod];
    this.windIcon = '\uf0b1';
  }

  constructor() {
  }

}
