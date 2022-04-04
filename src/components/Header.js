import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Avatar,
  Collapse,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Roboto',
  },
  appbar: {
    background: 'none',
    fontFamily: 'Roboto',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  appbarTitle: {
    flexGrow: '1',
    fontSize: '2.3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  sortIcon: {
    color: '#fff',
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  headingColor: {
    color: '#ffca4d',
  },
  titleColor: {
    color: '#fe1959',
  },
  textColor: {
    color: '#fff',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '3.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  },
  seeMore: {
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
  logo: {
    width: '5rem',
    height: '5rem',
    [theme.breakpoints.down('md')]: {
      width: '3rem',
      height: '3rem',
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const logoUrl = 'assets/logo240.png';

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <Avatar alt="R" src={logoUrl} className={classes.logo} />
          <h1 className={classes.appbarTitle}>
            RateMy
            <span className={classes.headingColor}>Exhibition</span>
          </h1>
          <Scroll to="content" smooth>
            <IconButton>
              <SortIcon className={classes.sortIcon} />
            </IconButton>
          </Scroll>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to
            <br />
            RateMy
            <span className={classes.titleColor}>Exhibition</span>
          </h1>
          <Scroll to="content" smooth>
            <IconButton>
              <ExpandMoreIcon className={classes.seeMore} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
