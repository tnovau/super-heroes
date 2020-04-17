import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import HeroeDetails from "../HeroeDetails";
import { getStoreState, baseHeroe, baseHeroeName } from "./heroe-mock-data";

describe("HeroeDetails", () => {
  it("should render without description", () => {
    const { getByTestId, getByText } = render(
      <Provider store={createStore(s => s, getStoreState(baseHeroe))}>
        <HeroeDetails />
      </Provider>
    );

    expect(getByTestId("heroe-name")).toBeInTheDocument();
    expect(getByText(baseHeroeName)).toBeInTheDocument();
  });

  it("should render with description", () => {
    const description = "someDescription";
    const { getByTestId, getByText } = render(
      <Provider store={createStore(s => s, getStoreState({...baseHeroe, description }))}>
        <HeroeDetails />
      </Provider>
    );

    expect(getByTestId("heroe-name")).toBeInTheDocument();
    expect(getByText(baseHeroeName)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });
});