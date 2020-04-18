import React from "react";
import { render, act, fireEvent } from "@testing-library/react";

import HeroesSort from "./HeroesSort";
import { SORT_HEROES_ACTION } from "../heroes-action";

import { ConnectedComponent, createMockStore, getStoreState } from "../../../utils/test-utils";

describe("HeroesSort", () => {
  const renderWithStore = (store) => render(
    <ConnectedComponent store={store}>
      <HeroesSort />
    </ConnectedComponent>
  );

  it("should display arrow up by default", () => {
    const { getByTestId } = renderWithStore(createMockStore(getStoreState()));

    expect(getByTestId("sort-arrow-up")).toBeInTheDocument();
  });

  it("should display arrow down if sortAsc is false", () => {
    const initialState = getStoreState();
    const { getByTestId } = renderWithStore(createMockStore({
      ...initialState,
      heroes: {
        ...initialState.heroes,
        sortAsc: false
      }
    }));

    expect(getByTestId("sort-arrow-down")).toBeInTheDocument();
  });

  it("should dispatch sort heroes action onClick", () => {
    const initialState = getStoreState();
    const mockStore = createMockStore(initialState, jest.fn());
    const { getByTestId } = renderWithStore(mockStore);

    act(() => {
      fireEvent.click(
        getByTestId("sort-heroes-button"));
    });

    const actionDispatched = mockStore.dispatch.mock.calls[0][0];

    expect(actionDispatched.type).toBe(SORT_HEROES_ACTION);
    expect(actionDispatched.payload).toBe(!initialState.heroes.sortAsc);
  });
});