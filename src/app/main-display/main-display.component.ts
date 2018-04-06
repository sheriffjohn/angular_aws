import { Component, OnInit, Input } from '@angular/core';
import IconMappings from '../utils/iconMappings';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html'
})
export class MainDisplayComponent implements OnInit {

  @Input() cod: number;
  @Input() temp: number;
  @Input() windspeed: number;
  @Input() winddeg: number;
  @Input() description: string;


  weatherIcon: string;


  constructor() { }

  ngOnInit() {
    this.weatherIcon = IconMappings[this.cod];
  }

}
