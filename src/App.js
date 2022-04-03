import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Content from "./components/Content";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Content />
    </div>
  );
}
