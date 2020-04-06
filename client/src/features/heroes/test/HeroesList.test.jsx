import React from 'react';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import HeroesList from "../HeroesList";
import { getStoreState, baseHeroe, baseHeroeName } from "./heroe-mock-data";

describe('HeroesList', () => {
  it('should render', () => {
    const { getByText } = render(
      <Provider store={createStore(s => s, getStoreState(baseHeroe))}>
        <HeroesList />
      </Provider>
    );
    expect(getByText(baseHeroeName)).toBeInTheDocument();
  });

  it('should render with filter', () => {
    const state = getStoreState(baseHeroe);
    const { getByText } = render(
      <Provider store={createStore(s => s, { ...state, heroes: { ...state.heroes, filter: 'Spider' } })}>
        <HeroesList />
      </Provider>
    );
    expect(getByText(/Avengers/)).toBeInTheDocument();
  });
});