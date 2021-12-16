/* eslint-disable import-helpers/order-imports */
/* eslint-disable no-undef */
import React from "react";
import {
  render,
  screen,
  queryByAttribute,
  fireEvent,
} from "@testing-library/react";
import Map from "../../components/Map";

describe("render the world Map", () => {
  const getWeather = (): void => {
    console.log("getWeather");
  };

  test("render the world map", async () => {
    render(
      <Map
        onClick={getWeather}
        popupText=""
        coord={{ lon: -49.0606, lat: -22.3147 }}
      />
    );

    const title = screen.getByText(/OpenStreetMap/i);
    expect(title).toBeInTheDocument();
  });

  test("render the map after clicking on a new area", () => {
    const dom = render(
      <Map
        onClick={getWeather}
        popupText="Bauru"
        coord={{ lon: -49.0606, lat: -22.3147 }}
      />
    );

    const getById = queryByAttribute.bind(null, "id");
    const map: any = getById(dom.container, "map");
    fireEvent.click(map);
  });
});
