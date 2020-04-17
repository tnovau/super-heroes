import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";

import { selectorHero } from "./heroes-selectors";
import { setHeroeSelectedId } from "./heroes-action";
import HeroeDetailsList from "./HeroeDetailsList";

const HeroeDetails = () => {
  const heroe = useSelector(selectorHero);
  const dispatch = useDispatch();
  return (
    <>
      <Grid
        spacing={3}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={1}>
          <IconButton
            color="secondary"
            onClick={() => dispatch(setHeroeSelectedId(""))}
          >
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item xs={10} >
          <Typography variant="h2" data-testid="heroe-name">
            {heroe.name}
          </Typography>
        </Grid>
        {heroe.description && <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom data-testid="heroe-description">
                {heroe.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>}
      </Grid>
      <Grid
        container
        alignItems="flex-start"
        spacing={3}
        direction="row"
        justify="center"
      >
        <HeroeDetailsList listTitle="Comics" {...heroe.comics} />
        <HeroeDetailsList listTitle="Series" {...heroe.series} />
        <HeroeDetailsList listTitle="Events" {...heroe.events} />
        <HeroeDetailsList listTitle="Stories" {...heroe.stories} />
      </Grid>
    </>
  )
};

export default HeroeDetails;
