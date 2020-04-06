import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const HeroeDetailsList = ({ items, listTitle }) => (
  <Grid item xs={12} sm={6}>
    <Card>
      <CardContent>
        <Typography variant="subtitle2">
          {listTitle}
        </Typography>
        <ul>
          {items.map(x => <li key={x.name}><Typography align="left" color="textSecondary">{x.name}</Typography></li>)}
        </ul>
      </CardContent>
    </Card>
  </Grid>
);

export default HeroeDetailsList;
