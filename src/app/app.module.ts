import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { WeekdayDisplayComponent } from './weekday-display/weekday-display.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DropdownComponent,
    MainDisplayComponent,
    WeekdayDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
