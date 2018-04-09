import * as weatherActions from '../actions/weather.actions';

export function weatherReducer(state = [], action: weatherActions.Action) {
    switch (action.type) {
        case weatherActions.LOAD_WEATHER_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
