import { Component, OnInit, Input } from '@angular/core';
import IconMappings from '../utils/iconMappings';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html'
})
export class MainDisplayComponent implements OnInit {

  @Input() cod: number;

  weatherIcon: string;


  constructor() { }

  ngOnInit() {
    this.weatherIcon = IconMappings[this.cod];
  }

}
