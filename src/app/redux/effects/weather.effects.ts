
import { Injectable } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Effect, Actions } from '@ngrx/effects';
import * as weatherActions from '../actions/weather.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherEffects {
    constructor(private weatherService: WeatherService, private actions$: Actions) {
    }

    @Effect() loadWeather$ = this.actions$
        .ofType(weatherActions.LOAD_WEATHER)
        .switchMap((action: any) => this.weatherService.getWeatherDataByCity(action.payload)
            .map(weather => (new weatherActions.LoadWeatherSuccessAction(weather))));
}

