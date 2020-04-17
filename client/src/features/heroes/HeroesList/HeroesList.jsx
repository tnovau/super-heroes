import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import { selectHeroes } from "../heroes-selectors";
import HeroesFilter from "./HeroesFilter";
import HeroeItem from "./HeroeItem";
import HeroesSort from "./HeroesSort";

import { ui } from "../../core";

export default () => {
  const loading = useSelector(ui.selectLoading);
  const heroes = useSelector(selectHeroes);

  return loading
    ? <CircularProgress />
    : (
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
    );
};
