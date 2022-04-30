/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
    height: '100%',
  },
  media: {
    height: '40vh',
    [theme.breakpoints.down('md')]: {
      height: '10vh',
    },
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'text.primary',
  },
  description: {
    fontFamily: 'Roboto',
    color: 'text.secondary',
  },
}));

export default function ImageCard({ cardInfo }) {
  const classes = useStyles();

  return (
    <CardActionArea href={cardInfo.link} className={classes.root}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          image={cardInfo.imageUrl}
          alt="abstract image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.title}
          >
            {cardInfo.title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.description}
          >
            {cardInfo.description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
