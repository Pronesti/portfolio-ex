import React from 'react';
import moment from 'moment'
import {Card,CardHeader, CardContent, Typography, CardActions, Avatar, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {motion} from 'framer-motion';


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      margin: '0 auto',
      marginTop: 50,
    },
    avatar: {
      backgroundColor: '#272727',
      color: '#66FCF1',
    },
  }));

const Article = ({obj}) => {
    const classes = useStyles();
  console.log(obj);
  return (
     <motion.div whileHover={{ scale: 1.1 }}> 
    <Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          DP
        </Avatar>
      }
      action={
        <IconButton aria-label="Settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={obj.title}
      subheader={moment(obj.date.toDate()).fromNow()}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {obj.body}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="Add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="Share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  </motion.div>
  );
};
export default Article;
