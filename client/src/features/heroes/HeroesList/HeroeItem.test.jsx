import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import { render, act, fireEvent } from "@testing-library/react";

import HeroeItem from "./HeroeItem";
import { getImageAdditionalProps } from "./HeroeItemImage";
import { getStoreState, baseHeroe } from "../test/heroe-mock-data";
import { SET_HEROE_SELECTED_ACTION } from "../heroes-action";

describe("HeroeItem", () => {
  it("should dispatch setHeroeSelectedId onClick", () => {
    const store = createStore(s => s, getStoreState());
    const mockStore = { ...store, dispatch: jest.fn() };
    const { getByTestId } = render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <HeroeItem {...baseHeroe} />
        </Provider>
      </MemoryRouter>);

    act(() => {
      fireEvent.click(
        getByTestId(`card-action-area-${baseHeroe.name}`));
    });

    const actionDispatched = mockStore.dispatch.mock.calls[0][0];

    expect(actionDispatched.type).toBe(SET_HEROE_SELECTED_ACTION);
    expect(actionDispatched.payload).toBe(baseHeroe.id);
  });

  it('should return empty object if the navigator is ie', () => {
    expect(getImageAdditionalProps("MSIE ")).toEqual({});
  });
});