import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Router from "./components/Router";
import MyAppBar from "./components/MyAppBar";

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
    <>
      <MyAppBar />
      <div className={classes.app}>
        <div className={classes.root}>
          <Router />
        </div>
      </div>
    </>
  );
};

export default App;
