import { Weather } from '../../models/weather';

export const LOAD_WEATHER = 'LOAD_WEATHER';
export const LOAD_WEATHER_SUCCESS = 'LOAD_WEATHER_SUCCESS';

export class LoadWeatherByCityAction {
    readonly type = LOAD_WEATHER;
    constructor(public payload: string) {
    }
}

export class LoadWeatherSuccessAction {
    readonly type = LOAD_WEATHER_SUCCESS;
    constructor(public payload: Weather) { }
}

export type Action
    = LoadWeatherByCityAction
    | LoadWeatherSuccessAction;
