/* eslint-disable import-helpers/order-imports */
import React, { useCallback, useEffect, useState } from "react";

import { Spin } from "antd";
import { usePosition } from "use-position";
import api from "../../services/api";
import { useGlobal } from "../../hooks/context";
import Weather from "../../components/Weather";
import {
  IApiData,
  ICoord,
  ILocation,
  IWeatherForecast,
  IForecast,
} from "../../components/Interface";

import { Container } from "./style";

const Home: React.FC = () => {
  const { loading, setLoad } = useGlobal();
  const [apiData, setApiData] = useState<IApiData | undefined>();
  const [apiDataForecast, setApiDataForecast] = useState<IWeatherForecast[]>(
    []
  );
  const [apiDataCityLocation, setApiDataCityLocation] = useState<ILocation>(
    {} as ILocation
  );
  const [city, setCity] = useState({
    name: "",
    coord: {
      lat: -22.3218102,
      lon: -49.0705863,
    },
  });
  const opt: any = {
    enableHighAccuracy: true,
  };
  const { latitude, longitude, errorMessage } = usePosition(true, opt);
  const apiKey = process.env.REACT_APP_API_KEY;

  const getForecastDaily = useCallback(
    (id: number) => {
      const apiUrl = `/data/2.5/forecast/daily?cnt=10&lang=pt_BR&units=metric&id=${id}&appid=${"093c63d1d6dd2f0f77c6f14d91a19042"}`;

      api
        .get(apiUrl)
        .then(({ data }) => {
          setCity(data.city);
          setLoad(false);
        })
        .catch(() => {
          setLoad(false);
        });
    },
    [setLoad]
  );

  const transformResponse = useCallback((data: IForecast) => {
    const { list = [] } = data;
    let count = 0;
    const newList: any = [];

    list.forEach((day: any, index: number) => {
      if (index === count) {
        count += 8;

        newList.push({
          date: day.dt,
          humidity: day.main.humidity,
          speed: day.wind.speed,
          temp: day.main.temp,
          max: day.main.temp_max,
          min: day.main.temp_min,
          pressure: day.main.pressure,
          main: {
            icon: day.weather[0].icon,
            description: day.weather[0].description,
          },
        });
      }
    });

    return newList;
  }, []);

  const getData = useCallback(
    async ({
      _lat,
      _lon,
    }: {
      _lat: number | undefined;
      _lon: number | undefined;
    }) => {
      const apiUrlTemp = `data/2.5/weather?lat=${_lat}&lon=${_lon}&units=metric&lang=pt_BR&appid=${apiKey}`;
      const apiUrlForecast = `/data/2.5/forecast?lat=${_lat}&lon=${_lon}&units=metric&lang=pt_BR&appid=${apiKey}`;
      const apiUrlCityLocation = `geo/1.0/reverse?lat=${_lat}&lon=${_lon}&lang=pt_BR&limit=${5}&appid=${apiKey}`;

      setLoad(true);
      try {
        const dataTemp = await api.get(apiUrlTemp);
        setApiData(dataTemp.data);

        const dataForecast = await api.get(apiUrlForecast);
        setApiDataForecast(transformResponse(dataForecast.data));

        const dataCityLocation = await api.get(apiUrlCityLocation);
        setApiDataCityLocation(dataCityLocation.data[0]);

        getForecastDaily(dataTemp.data.id);
      } catch (e) {
        setLoad(false);
      }
    },
    [getForecastDaily, setLoad, transformResponse, apiKey]
  );

  useEffect(() => {
    if (!apiData && latitude && longitude && !errorMessage) {
      getData({ _lon: longitude, _lat: latitude });
    }
  }, [apiData, latitude, longitude, errorMessage]);

  const getWeather = useCallback(
    (data: ICoord) => {
      getData({ _lon: data.lon, _lat: data.lat });
    },
    [getData]
  );

  const onUpdateTime = useCallback(() => {
    getData({ _lon: longitude, _lat: latitude });
  }, [getData, longitude, latitude]);

  return (
    <Spin spinning={loading} size="large">
      <Container>
        <div className="app">
          <div className="stars" />
          <div className="stars2" />
          <header className="app__header">
            <h1>Wealther App</h1>
            <Weather
              apiData={apiData}
              cityLocation={apiDataCityLocation}
              city={city}
              weatherForecast={apiDataForecast}
              getWeather={getWeather}
              onUpdateTime={onUpdateTime}
            />
          </header>
        </div>
      </Container>
    </Spin>
  );
};

export default Home;
