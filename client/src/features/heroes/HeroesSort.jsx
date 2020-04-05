import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button, Typography } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

import { sortHeroes } from './heroes-action';
import { selectorHeroesSortAsc } from './heroes-selectors';

const HeroesSort = () => {
  const sortAsc = useSelector(selectorHeroesSortAsc);
  const dispatch = useDispatch();

  return (
    <Grid
      spacing={3}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography>
          <Button
            color="secondary"
            onClick={() => dispatch(sortHeroes(!sortAsc))}
            endIcon={
              sortAsc
                ? <ArrowUpward />
                : <ArrowDownward />
            }
          >
            Sort
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeroesSort;
