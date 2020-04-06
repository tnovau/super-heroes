import heroesReducer, { initialState } from "../heroes-reducer";
import {
  getHeroesSuccess,
  setFilter,
  sortHeroes,
  setHeroeSelectedId
} from "../heroes-action";

describe('heroesReducer', () => {
  it('should return array when the action is GET_SUCCESS', () => {
    const heroes = [{}];
    const getHeroesSuccessAction = getHeroesSuccess(heroes);

    const newState = heroesReducer(undefined, getHeroesSuccessAction);

    expect(newState.array).toBe(heroes);
  });

  it('should return array SortedAsc when the action is SORT_HEROES_ACTION with true in payload', () => {
    const sortAction = sortHeroes(true);

    const newState = heroesReducer({
      ...initialState,
      array: [{ name: 'Z' }, { name: 'A' }]
    }, sortAction);

    expect(newState.array[0].name).toBe('A');
    expect(newState.array[1].name).toBe('Z');
  });

  it('should return array SortedDesc when the action is SORT_HEROES_ACTION with false in payload', () => {
    const sortAction = sortHeroes(false);

    const newState = heroesReducer({
      ...initialState,
      array: [{ name: 'A' }, { name: 'Z' }]
    }, sortAction);

    expect(newState.array[0].name).toBe('Z');
    expect(newState.array[1].name).toBe('A');
  });

  it('should return obj with filter when the action is SET_FILTER_ACTION', () => {
    const filter = 'some';
    const filterAction = setFilter(filter);

    const newState = heroesReducer(undefined, filterAction);

    expect(newState.filter).toBe(filter);
  });

  it('should return obj with heroeSelectedId when the action is SET_HEROE_SELECTED_ACTION', () => {
    const id = 'some';
    const heroeSelectedAction = setHeroeSelectedId(id);

    const newState = heroesReducer(undefined, heroeSelectedAction);

    expect(newState.heroeSelectedId).toBe(id);
  });

  it('should return initial state when other action is passed through', () => {
    const newState = heroesReducer(undefined, { type: '' });

    expect(newState).toBe(initialState);
  });
});