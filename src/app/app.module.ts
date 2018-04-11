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
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})

export class AppModule { }
