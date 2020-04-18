import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

export const ConnectedComponent = ({ children, store, initialEntries }) => <MemoryRouter initialEntries={initialEntries}>
  <Provider store={store}>
    { children }
  </Provider>
</MemoryRouter>;

export { baseHeroe, baseHeroeName } from "./mock-data";
export { createMockStore, getStoreState } from "./redux-utils";
