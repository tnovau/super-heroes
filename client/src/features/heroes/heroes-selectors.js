export const selectorHeroesObject = (state) => state.heroes;

export const selectorHeroes = (state) => selectorHeroesObject(state).array;

export const selectorHeroesSortAsc = (state) => selectorHeroesObject(state).sortAsc;
