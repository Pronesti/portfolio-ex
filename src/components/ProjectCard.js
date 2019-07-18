

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import moment from 'moment';
import { motion } from 'framer-motion';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    minWidth: 300,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const ProjectCard = (project) => {
  const { name, created_at, html_url } = project.project;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item xs>
      <motion.div
        className='container'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
    <Card className={classes.card} component="a" href={html_url}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {moment(created_at).fromNow()}
          </Typography>
        </CardContent>
      </div>
    </Card>
    </motion.div>
    </Grid>
  );
}

export default ProjectCard;