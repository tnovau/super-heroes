import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, act, fireEvent } from "@testing-library/react";

import HeroesFilter from "./HeroesFilter";
import { getStoreState } from "../test/heroe-mock-data";

describe("HeroesFilter", () => {
  it("should dispatch setFilter onChange", () => {
    const store = createStore(s => s, getStoreState());
    const mockStore = { ...store, dispatch: jest.fn() };
    const { container } = render(<Provider store={mockStore}>
      <HeroesFilter></HeroesFilter>
    </Provider>);

    act(() => {
      fireEvent.change(
        container.querySelector("input"), {
          target: {
            value: "Tho"
          }
        });
    });

    expect(mockStore.dispatch.mock.calls[0][0].payload).toBe("Tho")
  });
});