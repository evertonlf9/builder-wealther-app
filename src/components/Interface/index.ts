/* eslint-disable no-unused-vars */
export interface IMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface ISys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface ILocation {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export interface ICard {
  main: IMain;
  weather: IWeather[];
  timestamp: number;
  sys: ISys;
  location: ILocation;
  onUpdateTime(): void;
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IMapCity {
  coord: ICoord;
  country?: string;
  id?: number;
  name: string;
  population?: number;
  timezone?: number;
}

export interface IClouds {
  all: number;
}

export interface IApiData {
  base: string;
  cod: number;
  dt: number;
  id: number;
  name: string;
  timezone: number;
  visibility: number;
  clouds: IClouds;
  coord: ICoord;
  weather: IWeather[];
  sys: ISys;
  main: IMain;
}

export interface IWeatherForecast {
  date: number;
  humidity: number;
  speed: number;
  temp: number;
  max: number;
  min: number;
  pressure: number;
  main: {
    icon: string;
    description: string;
  };
}

export interface IWeatherProps {
  apiData: IApiData | undefined;
  cityLocation: ILocation;
  city: IMapCity;
  weatherForecast: IWeatherForecast[];
  getWeather(data: ICoord): void;
  onUpdateTime(): void;
}

export interface IWeatherCard {
  day: IWeatherForecast;
}
