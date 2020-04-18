import React from "react";
import { render, fireEvent, act } from "@testing-library/react";

import HeroeDetails from "../HeroeDetails";
import { SET_HEROE_SELECTED_ACTION } from "../heroes-action";

import {
  createMockStore,
  getStoreState,
  baseHeroe,
  baseHeroeName,
  ConnectedComponent
} from "../../../utils/test-utils";

describe("HeroeDetails", () => {
  const renderWithStore = (store) => render(
    <ConnectedComponent store={store}>
      <HeroeDetails />
    </ConnectedComponent>
  );

  const heroeNameDataTestId = "heroe-name";

  it("should render without description", () => {
    const { getByTestId, getByText } = renderWithStore(createMockStore(getStoreState()));

    expect(getByTestId(heroeNameDataTestId)).toBeInTheDocument();
    expect(getByText(baseHeroeName)).toBeInTheDocument();
  });

  it("should render with description", () => {
    const description = "someDescription";
    const { getByTestId, getByText } = renderWithStore(
      createMockStore(getStoreState({...baseHeroe, description })));

    expect(getByTestId(heroeNameDataTestId)).toBeInTheDocument();
    expect(getByText(baseHeroeName)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  it("should dispatch setHeroeSelectedId after click in goBackButton", () => {
    const mockStore = createMockStore(getStoreState(), jest.fn());
    const { getByTestId } = renderWithStore(mockStore);

    act(() => {
      fireEvent.click(getByTestId("heroe-details-go-back-button"));
    });

    const actionDispatched = mockStore.dispatch.mock.calls[0][0];

    expect(actionDispatched.type).toBe(SET_HEROE_SELECTED_ACTION);
    expect(actionDispatched.payload).toBe("");
  });
});