import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { selectorHeroes } from './heroes-selectors';
import HeroeItem from "./HeroeItem";
import HeroesSort from "./HeroesSort";
import HeroesFilter from "./HeroesFilter";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 24px)'
  },
}));

export default () => {
  const classes = useStyles();
  const heroes = useSelector(selectorHeroes);
  return (
    <div className={classes.root}>
      <Typography variant="h2">
        Avengers
      </Typography>
      <Grid
        spacing={3}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
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
    </div>
  )
};
