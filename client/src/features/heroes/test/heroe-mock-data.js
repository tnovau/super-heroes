import { initialState } from "../heroes-reducer";
const buildHeroeMedia = name => ({
  items: [
    { name }
  ]
});

export const baseHeroeId = 1;
export const baseHeroeName = "Thor";
export const baseHeroe = {
  id: baseHeroeId,
  name: baseHeroeName,
  comics:  buildHeroeMedia("Avengers"),
  series: buildHeroeMedia("Avengers series"),
  events: buildHeroeMedia("Avengers events"),
  stories: buildHeroeMedia("Avengers stories"),
  thumbnail: {
    path: "a",
    extension: "jpg"
  }
};
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