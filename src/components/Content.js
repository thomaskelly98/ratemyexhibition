/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Grid } from '@material-ui/core';
import ImageCard from './ImageCard';
import cards from '../static/cards';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '85%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  grid: {
    // todo: add margin to bottom of screen.
    // perhaps contain the grid using percentage
    height: '80%',
  },
}));

export default function Content() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="content">
      <Collapse
        className={classes.root}
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
      >
        <Grid container spacing={2} sx={{ m: '2rem' }}>
          <Grid item xs={12} s={12} md={12} lg={4} xl={4}>
            <ImageCard cardInfo={cards[0]} checked={checked} />
          </Grid>
          <Grid item xs={12} s={12} md={12} lg={4} xl={4}>
            <ImageCard cardInfo={cards[1]} checked={checked} />
          </Grid>
          <Grid item xs={12} s={12} md={12} lg={4} xl={4}>
            <ImageCard cardInfo={cards[2]} checked={checked} />
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
}
