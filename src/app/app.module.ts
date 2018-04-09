import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { WeekdayDisplayComponent } from './weekday-display/weekday-display.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './weather.service';
import { reducers } from './redux/reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { WeatherEffects } from './redux/effects/weather.effects';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DropdownComponent,
    MainDisplayComponent,
    WeekdayDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([WeatherEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})

export class AppModule { }
