export const selectorHeroesObject = (state) => state.heroes;

export const selectorHeroesFilter = (state) => selectorHeroesObject(state).filter;

export const selectorHeroeSelectedId = (state) =>
  selectorHeroesObject(state).heroeSelectedId;

const includes = (str, searchString) => str.toUpperCase().indexOf(searchString) !== -1;

export const selectorHeroesArray = (state) => selectorHeroesObject(state).array;

export const selectorHeroes = (state) => {
  const filter = selectorHeroesFilter(state).toUpperCase();
  const heroes = selectorHeroesArray(state);
  return (!filter)
    ? heroes
    : heroes.filter(({ name }) => includes(name, filter));
};

export const selectorHero = (state) => {
  const heroeSelectedId = selectorHeroeSelectedId(state);
  return heroeSelectedId
    ? selectorHeroesArray(state).filter(({ id }) => id === heroeSelectedId)[0]
    : null;
}

export const selectorHeroesSortAsc = (state) => selectorHeroesObject(state).sortAsc;
