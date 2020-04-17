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
          {[...new Set(items.map(x => x.name))]
            .map(name =>
              <li key={name}>
                <Typography align="left" color="textSecondary">
                  {name}
                </Typography>
              </li>)}
        </ul>
      </CardContent>
    </Card>
  </Grid>
);

export default HeroeDetailsList;
