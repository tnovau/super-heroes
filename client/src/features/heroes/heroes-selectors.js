import { includes } from "../../utils";

export const selectHeroesObject = (state) => state.heroes;

export const selectHeroesFilter = (state) => selectHeroesObject(state).filter;

export const selectHeroeSelectedId = (state) => selectHeroesObject(state)
  .heroeSelectedId;

export const selectHeroesArray = (state) => selectHeroesObject(state).array;

export const selectHeroesSortAsc = (state) => selectHeroesObject(state).sortAsc;

export const selectHeroes = (state) => {
  const filter = selectHeroesFilter(state).toUpperCase();
  const heroes = selectHeroesArray(state);
  return (filter)
    ? heroes.filter(({ name }) => includes(name, filter))
    : heroes;
};

const findById = (heroes, heroeSelectedId) => heroes
  .filter(({ id }) => id === heroeSelectedId)[0];

export const selectHero = (state) => {
  const heroeSelectedId = selectHeroeSelectedId(state);
  const heroes = selectHeroesArray(state);
  return heroeSelectedId
    ? findById(heroes, heroeSelectedId)
    : null;
}
