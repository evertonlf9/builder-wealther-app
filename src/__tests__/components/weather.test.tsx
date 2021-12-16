/* eslint-disable import-helpers/order-imports */
/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { apiData, apiDataCityLocation, city, apiDataForecast } from "../mocks";
import Weather from "../../components/Weather";

describe("render the main weather report", () => {
  const onUpdateTime = (): void => {
    console.log("onUpdateTime");
  };

  const getWeather = (): void => {
    console.log("getWeather");
  };

  test("render the main weather report", () => {
    render(
      <Weather
        apiData={apiData}
        cityLocation={apiDataCityLocation}
        city={city}
        weatherForecast={apiDataForecast}
        getWeather={getWeather}
        onUpdateTime={onUpdateTime}
      />
    );

    const textCity = screen.getByText("Bauru");
    expect(textCity).toBeInTheDocument();

    const textState = screen.getByText("- São Paulo - BR");
    expect(textState).toBeInTheDocument();
  });

  test("render the card by clicking the refresh button", () => {
    render(
      <Weather
        apiData={apiData}
        cityLocation={apiDataCityLocation}
        city={city}
        weatherForecast={apiDataForecast}
        getWeather={getWeather}
        onUpdateTime={onUpdateTime}
      />
    );

    const buttonRefresh: any = screen.queryByTestId("button-refresh");
    fireEvent.click(buttonRefresh);
  });
});
