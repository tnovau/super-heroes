import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Grid, IconButton, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { selectorHero } from "./heroes-selectors";
import { setHeroeSelectedId } from "./heroes-action";
import HeroeDetailsList from './HeroeDetailsList'

const HeroeDetails = () => {
  const heroe = useSelector(selectorHero);
  const dispatch = useDispatch();
  return (
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
          onClick={() => { dispatch(setHeroeSelectedId('')) }}
        >
          <ArrowBack />
        </IconButton>
      </Grid>
      <Grid item xs={10} >
        <Typography variant="h2">
          {heroe.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {heroe.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <HeroeDetailsList listTitle="Comics" {...heroe.comics} />
      <HeroeDetailsList listTitle="Series" {...heroe.series} />
      <HeroeDetailsList listTitle="Events" {...heroe.events} />
      <HeroeDetailsList listTitle="Stories" {...heroe.stories} />
    </Grid>
  )
};

export default HeroeDetails;
