/* eslint-disable import-helpers/order-imports */
/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { cityLocation, apiData } from "../mocks";

import Card from "../../components/Card";

describe("render the main weather report card", () => {
  const onUpdateTime = (): void => {
    console.log("onUpdateTime");
  };

  test("render the main weather report card", () => {
    render(
      <Card
        location={cityLocation}
        main={apiData.main}
        weather={apiData.weather}
        timestamp={apiData.dt}
        sys={apiData.sys}
        onUpdateTime={onUpdateTime}
      />
    );
    const title = screen.getByText(/Bauru/i);
    expect(title).toBeInTheDocument();

    const date = screen.getByText(/Quarta-feira, dezembro 15º 2021/i);
    expect(date).toBeInTheDocument();

    const deciption = screen.getByText(/nublado/i);
    expect(deciption).toBeInTheDocument();

    const am = screen.getByText(/Nascer do sol 5:26 AM/i);
    expect(am).toBeInTheDocument();

    const pm = screen.getByText(/Pôr do sol 18:56 PM/i);
    expect(pm).toBeInTheDocument();

    const buttonRefresh: any = screen.queryByTestId("button-refresh");

    fireEvent.click(buttonRefresh);
  });

  test("render the card by clicking the refresh button", () => {
    let cityLoc = {
      country: "BR",
      lat: -22.2840884,
      lon: -48.1267265,
      name: "Brotas",
      state: "São Paulo",
    };

    const apiData3 = {
      base: "stations",
      clouds: { all: 100 },
      cod: 200,
      coord: { lon: -49.0799, lat: -22.3183 },
      dt: 1639577280,
      id: 3470279,
      main: {
        feels_like: 24.64,
        humidity: 95,
        pressure: 1012,
        temp: 23.73,
        temp_max: 23.73,
        temp_min: 23.73,
      },
      name: "Brotas",
      sys: {
        type: 2,
        id: 53165,
        country: "BR",
        sunrise: 1639556818,
        sunset: 1639605379,
      },
      timezone: -10800,
      visibility: 2162,
      weather: [
        {
          description: "nublado",
          icon: "04d",
          id: 804,
          main: "Clouds",
        },
      ],
      wind: { speed: 3.13, deg: 78, gust: 5.81 },
    };

    const onUpdateTime2 = (): void => {
      cityLoc = {
        country: "BR",
        lat: -22.2840884,
        lon: -48.1267265,
        name: "Bauru",
        state: "São Paulo",
      };
    };

    render(
      <Card
        location={cityLoc}
        main={apiData3.main}
        weather={apiData3.weather}
        timestamp={apiData3.dt}
        sys={apiData3.sys}
        onUpdateTime={onUpdateTime2}
      />
    );

    const title = screen.getByText(/Brotas/i);
    expect(title).toBeInTheDocument();

    const buttonRefresh: any = screen.queryByTestId("button-refresh");
    fireEvent.click(buttonRefresh);
  });

  test("render the card", () => {
    const apiData2: any = {
      base: "stations",
      clouds: { all: 100 },
      cod: 200,
      coord: { lon: -49.0799, lat: -22.3183 },
      dt: 1639577280,
      id: 3470279,
      main: {
        feels_like: 24.64,
        humidity: 95,
        pressure: 1012,
        temp: 23.73,
        temp_max: 23.73,
        temp_min: 23.73,
      },
      name: "Bauru",
      sys: {
        type: 2,
        id: 53165,
        country: "BR",
        sunrise: 1639556818,
        sunset: 1639605379,
      },
      timezone: -10800,
      visibility: 2162,
      weather: null,
      wind: { speed: 3.13, deg: 78, gust: 5.81 },
    };

    render(
      <Card
        location={cityLocation}
        main={apiData.main}
        weather={apiData2.weather}
        timestamp={apiData.dt}
        sys={apiData.sys}
        onUpdateTime={onUpdateTime}
      />
    );

    const title = screen.getByText(/Bauru/i);
    expect(title).toBeInTheDocument();
  });
});
