import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import { sortHeroes } from "../heroes-action";
import { selectHeroesSortAsc } from "../heroes-selectors";

const HeroesSort = () => {
  const sortInAscendingOrder = useSelector(selectHeroesSortAsc);
  const dispatch = useDispatch();

  return (
    <Button
      color="primary"
      onClick={() => dispatch(sortHeroes(!sortInAscendingOrder))}
      endIcon={
        sortInAscendingOrder
          ? <ArrowUpward />
          : <ArrowDownward />
      }
    >
      Sort
    </Button>
  );
};

export default HeroesSort;
