import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import HeroeItemImage from "./HeroeItemImage";
import { setHeroeSelectedId } from "../heroes-action";

import { DETAILS_ROUTE } from "../../../routes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
  cardContent: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
  }
}));

const HeroeItem = ({ name, id, thumbnail }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => {
        dispatch(setHeroeSelectedId(id));
        history.push(DETAILS_ROUTE);
      }}>
        <HeroeItemImage
          name={name}
          className={classes.media}
          thumbnail={thumbnail}/>
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HeroeItem;
