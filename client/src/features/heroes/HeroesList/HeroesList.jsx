import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import { selectHeroes } from "../heroes-selectors";
import HeroesFilter from "./HeroesFilter";
import HeroeItem from "./HeroeItem";
import HeroesSort from "./HeroesSort";

import { ui } from "../../core";

const useStyles = makeStyles(() => ({
  actionContainer: {
    marginTop: 5
  }
}));

export default () => {
  const loading = useSelector(ui.selectLoading);
  const heroes = useSelector(selectHeroes);
  const classes = useStyles();

  const commonGridProps = {
    spacing: 3,
    container: true,
    direction: "row",
    justify: "center"
  };

  return loading
    ? <CircularProgress />
    : (
      <>
        <Grid
          {...commonGridProps}
          className={classes.actionContainer}
          alignItems="flex-end"
        >
          <Grid item xs={6}>
            <HeroesSort />
          </Grid>
          <Grid item xs={6}>
            <HeroesFilter />
          </Grid>
        </Grid>
        <Grid {...commonGridProps} alignItems="flex-start">
          {heroes.map(h => (
            <Grid
              item
              key={h.name}
            >
              <HeroeItem {...h} />
            </Grid>))}
        </Grid>
      </>
    );
};
