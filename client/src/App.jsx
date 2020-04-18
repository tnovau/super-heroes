import React from "react";
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Router from "./components/Router";
import MyAppBar from "./components/MyAppBar";
import ScrollToTop from "./components/ScrollToTop";

const useStyles = makeStyles(() => ({
  app: {
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    width: "100%",
  },
  root: {
    flexGrow: "inherit",
    width: "calc(100% - 24px)"
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MyAppBar />
      <div className={classes.app}>
        <div className={classes.root}>
          <Switch>
            <Router />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
