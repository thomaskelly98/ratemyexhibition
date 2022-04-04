/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '100vw',
    margin: '20px',
  },
  media: {
    height: '30vh',
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
    <Card className={classes.root}>
      <CardActionArea href={cardInfo.link}>
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
      </CardActionArea>
    </Card>
  );
}
