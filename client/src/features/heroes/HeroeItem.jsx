import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { setHeroeSelectedId } from './heroes-action';

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

const HeroeItem = ({
  name,
  id,
  thumbnail: {
    path,
    extension
  }}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => dispatch(setHeroeSelectedId(id))}>
        <CardMedia
          className={classes.media}
          image={`${path}.${extension}`}
          title={name}
        />
        <CardContent classes={{
          root: classes.cardContent
        }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HeroeItem;