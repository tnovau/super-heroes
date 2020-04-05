import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HeroesList } from './features/heroes';

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
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <HeroesList />
    </div>
  );
};

export default App;
