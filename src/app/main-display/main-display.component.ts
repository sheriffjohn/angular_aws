import { Component, OnInit, Input, OnChanges } from '@angular/core';
import IconMappings from '../utils/iconMappings';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html'
})
export class MainDisplayComponent implements OnInit, OnChanges {

  @Input() cod: number;

  weatherIcon: string;
  weatherData: any;

  ngOnChanges() {
    this.weatherIcon = IconMappings[this.cod];
  }

  constructor() {
  }

  ngOnInit() {

  }
}
