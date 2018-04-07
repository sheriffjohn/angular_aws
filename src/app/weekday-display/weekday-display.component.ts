import { Component, OnInit, Input } from '@angular/core';
import IconMappings from '../utils/iconMappings';

@Component({
  selector: 'app-weekday-display',
  templateUrl: './weekday-display.component.html'
})
export class WeekdayDisplayComponent implements OnInit {

  @Input() day: string;
  @Input() cod: number;
  @Input() description: string;
  @Input() maxtemp: number;
  @Input() mintemp: number;

  weatherIcon: string;

  constructor() { }

  ngOnInit() {
    this.weatherIcon = IconMappings[this.cod];
  }

}
