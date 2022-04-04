/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import ImageCard from './ImageCard';
import cards from '../static/cards';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  grid: {
    justifyContent: 'center',
  },
}));

export default function Content() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="content">
      <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
        <ImageCard cardInfo={cards[0]} checked={checked} />
        <ImageCard cardInfo={cards[1]} checked={checked} />
      </Collapse>
    </div>
  );
}
