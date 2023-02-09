import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LengthConverter } from './lengthConverter/lengthConverter.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutingModule } from './routing.module';
import { LenghtModule } from './lenght/lenght.module';
import { UserListModule } from './list/user-list.module';
import { WeatherModule } from './weather/weather.module';
import { BoardModule } from './board/board.module';

@NgModule({
  declarations: [
    AppComponent,
    LengthConverter,
    TemperatureConverterComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    RoutingModule,
    LenghtModule,
    UserListModule,
    WeatherModule,
    BoardModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
