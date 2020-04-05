import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
  thumbnail: {
    path,
    extension
  }}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
