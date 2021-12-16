/* eslint-disable import-helpers/order-imports */
/* eslint-disable no-undef */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { act, render, screen } from "@testing-library/react";
import { apiData } from "../../mocks";
import Home from "../../../pages/home/index";

describe("Render Home Page", () => {
  let originFetch: any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });

  test("render home page", async () => {
    const fakeResponse = apiData;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;

    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());

    act(() => {
      render(<Home />);
    });

    const linkElement = screen.getByText(/Wealther App/i);
    expect(linkElement).toBeInTheDocument();

    // await waitForElement(() => getByTestId("button-refresh"));

    // const buttonRefresh: any = screen.queryByTestId("button-refresh");
    // fireEvent.click(buttonRefresh);
  });

  it("should return latitude and longitude", () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 51.1,
              longitude: 45.3,
            },
          })
        )
      ),
    };

    const geo: any = {
      geolocation: mockGeolocation,
    };

    global.navigator = geo;

    // jest.mock("usePosition", () => {
    //   return {
    //     latitude: 52.3172414,
    //     longitude: 4.8717809,
    //     accuracy: 24,
    //     errorMessage: null,
    //   };
    // });

    // const success = (pos: any): void => {
    //   const crd = pos.coords;

    //   console.log("Sua posição atual é:");
    //   console.log(`Latitude : ${crd.latitude}`);
    //   console.log(`Longitude: ${crd.longitude}`);
    //   console.log(`Mais ou menos ${crd.accuracy} metros.`);
    //   // console.log(mockGeolocation);
    // };

    // const error = (err: any): void => {
    //   console.warn(`ERROR(${err.code}): ${err.message}`);
    // };

    // global.navigator.geolocation.getCurrentPosition(success, error, {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0,
    // });

    act(() => {
      render(<Home />);
    });
    // const tree = testRenderer.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
