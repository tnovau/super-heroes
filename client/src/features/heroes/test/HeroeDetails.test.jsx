import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import HeroeDetails from "../HeroeDetails";
import { getStoreState, baseHeroe, baseHeroeName } from "./heroe-mock-data";
import { SET_HEROE_SELECTED_ACTION } from "../heroes-action";

describe("HeroeDetails", () => {
  it("should render without description", () => {
    const { getByTestId, getByText } = render(
      <Provider store={createStore(s => s, getStoreState())}>
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

  it("should dispatch setHeroeSelectedId after click in goBackButton", () => {
    const store = createStore(s => s, getStoreState());
    const mockStore = { ...store, dispatch: jest.fn() };
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <HeroeDetails />
      </Provider>
    );

    act(() => {
      fireEvent.click(getByTestId("heroe-details-go-back-button"));
    });

    const actionDispatched = mockStore.dispatch.mock.calls[0][0];

    expect(actionDispatched.type).toBe(SET_HEROE_SELECTED_ACTION);
    expect(actionDispatched.payload).toBe("");
  });
});