import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, act, fireEvent } from "@testing-library/react";

import HeroesSort from "./HeroesSort";
import { getStoreState, baseHeroe } from "../test/heroe-mock-data";
import { SORT_HEROES_ACTION } from "../heroes-action";

describe("HeroesSort", () => {
  it("should display arrow up by default", () => {
    const { getByTestId } = render(
      <Provider store={createStore(s => s, getStoreState())}>
        <HeroesSort />
      </Provider>);

    expect(getByTestId("sort-arrow-up")).toBeInTheDocument();
  });

  it("should display arrow down if sortAsc is false", () => {
    const initialState = getStoreState();
    const state = {
      ...initialState,
      heroes: {
        ...initialState.heroes,
        sortAsc: false
      }
    };
    const { getByTestId } = render(
      <Provider store={createStore(s => s, state)}>
        <HeroesSort />
      </Provider>);

    expect(getByTestId("sort-arrow-down")).toBeInTheDocument();
  });

  it("should dispatch sort heroes action onClick", () => {
    const initialState = getStoreState();
    const store = createStore(s => s, initialState);
    const mockStore = { ...store, dispatch: jest.fn() };
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <HeroesSort {...baseHeroe} />
      </Provider>);

    act(() => {
      fireEvent.click(
        getByTestId("sort-heroes-button"));
    });

    const actionDispatched = mockStore.dispatch.mock.calls[0][0];

    expect(actionDispatched.type).toBe(SORT_HEROES_ACTION);
    expect(actionDispatched.payload).toBe(!initialState.heroes.sortAsc);
  });
});