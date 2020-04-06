const buildHeroeMedia = name => ({
  items: [
    { name }
  ]
});

export const baseHeroeId = 1;
export const baseHeroeName = 'Thor';
export const baseHeroe = {
  id: baseHeroeId,
  name: baseHeroeName,
  comics:  buildHeroeMedia('Avengers'),
  series: buildHeroeMedia('Avengers series'),
  events: buildHeroeMedia('Avengers events'),
  stories: buildHeroeMedia('Avengers stories')
};
export const getStoreState = (heroe) => ({
  heroes: {
    array: [heroe],
    heroeSelectedId: baseHeroeId
  }
});