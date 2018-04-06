import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeatherService]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('to respond with data', inject([WeatherService], async((service: WeatherService) => {
    service.getWeatherDataByCity('gothenburg').subscribe((data) => {
      expect(data['coord']).toBeNull();
    });
  })));

});
