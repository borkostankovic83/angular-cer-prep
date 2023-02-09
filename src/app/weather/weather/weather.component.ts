import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weatherData: data[] = [];

  searchTerm = "";
  searchedData?: data = undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  handleChange(value: string) {
    this.searchedData = this.weatherData.find(
      ({ name }) => name.toLowerCase() === value.toLowerCase()
    );
  }
  
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}