import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";

import { setFilter } from "../heroes-action";
import { selectHeroesFilter } from "../heroes-selectors";

const HeroesFilter = () => {
  const filter = useSelector(selectHeroesFilter);
  const dispatch = useDispatch();

  return <TextField data-testid="heroes-filter-input"
    label="Type to search..."
    onChange={(ev) => {
      dispatch(setFilter(ev.target.value));
      return false;
    }}
    value={filter}
    color="primary"
  />;
};

export default HeroesFilter;
