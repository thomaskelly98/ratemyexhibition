import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import cards from "../static/cards";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Content() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageCard cardInfo={cards[0]} />
      <ImageCard cardInfo={cards[1]} />
    </div>
  );
}
