import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { HeroesList, HeroeDetails, selectorHeroeSelectedId } from './features/heroes';
import { selectorLoading } from './features/core/ui';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    width: '100%',
  },
  root: {
    flexGrow: 1,
    width: 'calc(100% - 24px)'
  },
}));

const App = () => {
  const classes = useStyles();
  const loading = useSelector(selectorLoading);
  if (loading) {
    return <CircularProgress />
  }
  const heroeSelectedId = useSelector(selectorHeroeSelectedId);
  return (
    <div className={classes.app}>
      <div className={classes.root}>
        {heroeSelectedId
          ? <HeroeDetails />
          : <HeroesList />}
      </div>
    </div>
  );
};

export default App;
