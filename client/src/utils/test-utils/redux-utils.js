import { createStore } from "redux";
import { baseHeroe, baseHeroeId } from "./mock-data";
import { initialState } from "../../features/heroes/heroes-reducer";

export const getStoreState = (heroe = baseHeroe) => ({
  heroes: {
    ...initialState,
    array: [heroe],
    heroeSelectedId: baseHeroeId
  },
  ui: {
    loading: false
  }
});

/**
 * @param {ReturnType<typeof getStoreState>} state
 * @param {jest.Mock} dispatch
 */
export const createMockStore = (state = getStoreState(), dispatch = null) => {
  const store = createStore(s => s, state);
  return {
    ...store,
    dispatch: dispatch ?? store.dispatch
  };
};
