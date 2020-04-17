import React from 'react';
import { useSelector } from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { selectorHeroes } from './heroes-selectors';
import HeroeItem from "./HeroeItem";
import HeroesSort from "./HeroesSort";
import HeroesFilter from "./HeroesFilter";
import { ui } from "../core";

export default () => {
  const loading = useSelector(ui.selectorLoading);
  const heroes = useSelector(selectorHeroes);

  if (loading) {
    return <CircularProgress />
  }

  return (
    <>
      <Grid
        spacing={3}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={1} implementation="css" component={Hidden} />
        <Grid item xs={10}>
          <Typography variant="h2">
            Avengers
          </Typography>
        </Grid>
        <Grid item xs={1} implementation="css" component={Hidden} />
        <Grid item xs={6}>
          <HeroesSort />
        </Grid>
        <Grid item xs={6}>
          <HeroesFilter />
        </Grid>
        {heroes.map(h => (
          <Grid
            item
            key={h.name}
          >
            <HeroeItem {...h} />
          </Grid>))}
      </Grid>
    </>
  )
};
