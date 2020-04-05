export const selectorHeroesObject = (state) => state.heroes;

export const selectorHeroesFilter = (state) => selectorHeroesObject(state).filter;

const includes = (str, searchString) => str.toUpperCase().indexOf(searchString) !== -1;

export const selectorHeroes = (state) => {
  const filter = selectorHeroesFilter(state).toUpperCase();
  const heroes = selectorHeroesObject(state).array;
  return (!filter)
    ? heroes
    : heroes.filter(({ name }) => includes(name, filter));
};

export const selectorHeroesSortAsc = (state) => selectorHeroesObject(state).sortAsc;
