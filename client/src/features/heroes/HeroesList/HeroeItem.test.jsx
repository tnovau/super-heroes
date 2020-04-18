import React from "react";
import { render, act, fireEvent } from "@testing-library/react";

import HeroeItem from "./HeroeItem";
import { getImageAdditionalProps } from "./HeroeItemImage";
import { SET_HEROE_SELECTED_ACTION } from "../heroes-action";
import {
  ConnectedComponent,
  getStoreState,
  baseHeroe,
  createMockStore
} from "../../../utils/test-utils";

describe("HeroeItem", () => {
  it("should dispatch setHeroeSelectedId onClick", () => {
    const mockStore = createMockStore(getStoreState(), jest.fn());
    const { getByTestId } = render(
      <ConnectedComponent store={mockStore}>
        <HeroeItem {...baseHeroe} />
      </ConnectedComponent>);

    act(() => {
      fireEvent.click(
        getByTestId(`card-action-area-${baseHeroe.name}`));
    });

    const actionDispatched = mockStore.dispatch.mock.calls[0][0];

    expect(actionDispatched.type).toBe(SET_HEROE_SELECTED_ACTION);
    expect(actionDispatched.payload).toBe(baseHeroe.id);
  });

  it("should return empty object if the navigator is ie", () => {
    expect(getImageAdditionalProps("MSIE ")).toEqual({});
  });
});