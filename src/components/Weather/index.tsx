import React, { memo } from "react";

import Card from "../Card";
import { IWeatherProps, IWeatherForecast } from "../Interface";
import Map from "../Map";
import WeatherCard from "../WeatherCard";
import { ContainerForecast } from "./style";

export const Weather: React.FC<IWeatherProps> = ({
  apiData,
  cityLocation,
  city,
  weatherForecast,
  getWeather,
  onUpdateTime,
}) => {
  return (
    <div style={{ width: "90%", marginBottom: "2rem" }}>
      <div className="card mt-3 mx-auto">
        {apiData && (
          <Card
            location={cityLocation}
            main={apiData.main}
            weather={apiData.weather}
            timestamp={apiData.dt}
            sys={apiData.sys}
            onUpdateTime={onUpdateTime}
          />
        )}
      </div>
      <ContainerForecast className="card mt-3 mx-auto">
        {weatherForecast &&
          weatherForecast.map((data: IWeatherForecast, index: number) => (
            <WeatherCard day={data} key={index.toString()} />
          ))}
      </ContainerForecast>
      {city && (
        <Map onClick={getWeather} popupText={city.name} coord={city.coord} />
      )}
    </div>
  );
};

export default memo(Weather);
