/* eslint-disable import-helpers/order-imports */
import React, { useCallback, memo } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaSyncAlt } from "react-icons/fa";

import { Card as CardAnt } from "antd";
import { ICard } from "../Interface";
import { ContainerCard } from "./style";

const Card: React.FC<ICard> = ({
  main,
  weather,
  timestamp,
  sys,
  location,
  onUpdateTime,
}) => {
  moment.locale("pt-br");
  const Title = useCallback(() => {
    return (
      <div className="card__title">
        <div>
          <BsFillGeoAltFill />
          <p>
            <strong>{location?.name}</strong> - {location?.state} -{" "}
            {location?.country}
          </p>
        </div>
        <div
          className="card__title-btn"
          onClick={onUpdateTime}
          aria-hidden="true"
          data-testid="button-refresh"
        >
          <FaSyncAlt />
        </div>
      </div>
    );
  }, [location, onUpdateTime]);

  const toUpperCase = useCallback((text: string) => {
    const textUp = text.substr(0, 1).toLocaleUpperCase();
    return text.replace(text.substr(0, 1), textUp);
  }, []);

  const formatTime = useCallback((unix_timestamp: number, type: string) => {
    const date = new Date(unix_timestamp * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    const formattedTime = `${hours}:${minutes.substr(-2)} ${type}`;
    return formattedTime;
  }, []);

  return (
    <ContainerCard>
      <CardAnt title={<Title />} className={weather ? weather[0].main : ""}>
        <div className="card__row" style={{ margin: "0 0 1rem 0" }}>
          <strong>
            {timestamp &&
              toUpperCase(moment.unix(timestamp).format("dddd, MMMM Do YYYY"))}
          </strong>
        </div>
        <div className="card__row">
          <p>
            Temperatura {main?.temp.toFixed(0)}
            &deg; C
          </p>
          <p>
            Sensação térmica {main?.feels_like.toFixed(0)}
            &deg; C
          </p>
        </div>
        <div className="card__row">
          <p>
            {weather && toUpperCase(weather[0].description)}
            <img
              src="http://openweathermap.org/img/w/04n.png"
              alt="weather status icon"
              className="weather-icon"
            />
          </p>
          <p>Umidade {main?.humidity}%</p>
        </div>

        <div className="card__row">
          <p>
            Mínima {main?.temp_min.toFixed(0)}
            &deg; C
          </p>
          <p>
            Máxima {main?.temp_max.toFixed(0)}
            &deg; C
          </p>
        </div>
        <div className="card__row">
          <p>Nascer do sol {formatTime(sys?.sunrise, "AM")}</p>
          <p>Pôr do sol {formatTime(sys?.sunset, "PM")}</p>
        </div>
      </CardAnt>
    </ContainerCard>
  );
};

export default memo(Card);
