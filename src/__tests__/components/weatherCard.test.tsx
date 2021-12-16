/* eslint-disable import-helpers/order-imports */
/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { day } from "../mocks";
import WeatherCard from "../../components/WeatherCard";

describe("render the main weather report WeatherCard", () => {
  test("render the main weather report WeatherCard", () => {
    render(<WeatherCard day={day} />);

    const title = screen.getByText(/chuva moderada/i);
    expect(title).toBeInTheDocument();

    const humidity = screen.getByText(/Umidade 96/i);
    expect(humidity).toBeInTheDocument();

    const speed = screen.getByText(/velocidade: 3.17 mps/i);
    expect(speed).toBeInTheDocument();

    const pressure = screen.getByText(/pressão atmosférica: 1011 mb/i);
    expect(pressure).toBeInTheDocument();
  });
});
