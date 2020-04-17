import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

import { isIE } from '../../utils';

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
  const history = useHistory();

  const additionalProps = isIE(navigator.userAgent) ? {} : {
    component: "img",
    crossOrigin: "anonymous"
  };

  const handleClick = () => {
    dispatch(setHeroeSelectedId(id));
    history.push("/details");
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={`${path}.${extension}`.replace("http://", "https://")}
          title={name}
          {...additionalProps}
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
