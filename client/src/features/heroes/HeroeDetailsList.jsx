import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { distinct } from "../../utils";

const getDistinctItemNames = (items) => distinct(items.map(({name}) => name));

const HeroeDetailsList = ({ items, listTitle }) => (
  <Grid item xs={12} sm={6}>
    <Card>
      <CardContent>
        <Typography variant="subtitle2">
          {listTitle}
        </Typography>
        <ul>
          {getDistinctItemNames(items).map(name =>
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
