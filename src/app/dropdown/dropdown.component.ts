import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  city: string;
  cities: any[];
  @Output() selectedCity = new EventEmitter<string>()

  constructor() {

    this.cities = [
      'Alingsås',
      'Borås',
      'Eskilstuna',
      'Göteborg',
      'Halmstad',
      'Helsingborg',
      'Jönköping',
      'Kalmar',
      'Karlshamn',
      'Karlskoga',
      'Karlskrona',
      'Karlstad',
      'Linköping',
      'Luleå',
      'Lund',
      'Malmö',
      'Norrköping',
      'Skövde',
      'Stockholm',
      'Sundsvall',
      'Södertälje',
      'Umeå',
      'Uppsala',
      'Västerås',
      'Växjö',
      'Örebro',
      'Örnsköldsvik',
      'Östersund'
    ];
  }

  ngOnInit() {

  }

  setCity(city: string) {
    this.city = city;
    this.selectedCity.emit(city);
  }

}
