import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

import { sortHeroes } from './heroes-action';
import { selectorHeroesSortAsc } from './heroes-selectors';

const HeroesSort = () => {
  const sortAsc = useSelector(selectorHeroesSortAsc);
  const dispatch = useDispatch();

  return (
    <Button
      color="primary"
      onClick={() => dispatch(sortHeroes(!sortAsc))}
      endIcon={
        sortAsc
          ? <ArrowUpward />
          : <ArrowDownward />
      }
    >
      Sort
    </Button>
  );
};

export default HeroesSort;
