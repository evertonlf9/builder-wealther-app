/* eslint-disable import-helpers/order-imports */
import React, { memo, useCallback } from "react";
import moment from "moment";

import {
  Header,
  Card,
  WeatherImage,
  Title,
  Subtitle,
  Temperature,
  Additional,
} from "./styles";
import { IWeatherCard } from "../Interface";

const WeatherCard: React.FC<IWeatherCard> = ({ day }) => {
  const toUpperCase = useCallback((text: string) => {
    const textUp = text.substr(0, 1).toLocaleUpperCase();
    return text.replace(text.substr(0, 1), textUp);
  }, []);

  return (
    <Card>
      <Header>
        <WeatherImage
          src={`https://openweathermap.org/img/w/${day?.main.icon}.png`}
          alt={day.main.icon}
        />

        <div>
          <Title>
            {toUpperCase(moment.unix(day?.date).format("ddd, MMM Do"))}
          </Title>
          <Subtitle>{toUpperCase(day?.main.description)}</Subtitle>
        </div>
      </Header>

      <Temperature>
        <strong>{`${day?.max.toFixed()}℃`}</strong>
        {` | ${day?.min.toFixed()}℃`}
      </Temperature>

      <Additional>
        <div>humidade: {day?.humidity} %</div>
        <div>velocidade: {day?.speed} mps</div>
        <div>pressão atmosférica: {day?.pressure} mb</div>
      </Additional>
    </Card>
  );
};

export default memo(WeatherCard);
