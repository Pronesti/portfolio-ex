import React from 'react';
import {motion} from 'framer-motion';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/gmail.png';
import {Card, CardActions, CardHeader, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  actions: {
    textAlign: 'center',
  }
}));

const ProfileCard = () => {
  const classes = useStyles();
    return (
      <Card className={classes.card}>
      <CardHeader
        title="Diego Pronesti"
        subheader="Web Developer"
      />
     <img src="https://avatars2.githubusercontent.com/u/34582381?s=460&v=4" alt="profile" />
      <CardActions className={classes.actions}>
        <IconButton>
        <motion.img src={email} alt="email" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}/>
        </IconButton>
        <IconButton aria-label="Share">
        <motion.img src={github} alt="github" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}/>
        </IconButton>
        <IconButton>
        <motion.img src={linkedin} alt="linkedin" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}/>
        </IconButton>
      </CardActions>
      </Card>  
    )
}

export default ProfileCard

/*
<aside className='profile-card'>
        <header>
          <a href='https://www.diegopronesti.com.ar'>
            <img
              src='https://avatars2.githubusercontent.com/u/34582381?s=460&v=4'
              alt='avatar'
            />
          </a>
          <h1>Diego Pronesti</h1>
          <h2>Web Developer</h2>
        </header>

        <div className='profile-bio'>
          <p>
            Even when everything is perfect, you can always make it better.
            Break barriers in your head, create something crazy and don't forget
            Code is Poetry...
          </p>
        </div>

        <ul className='profile-social-links'>
          <li>
            <a href='https://github.com/Pronesti'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img src={github} alt="github" />
            </motion.div>
            </a>
          </li>

          <li>
            <a href='https://ar.linkedin.com/in/diego-pronesti'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img src={linkedin} alt="linkedin" />
            </motion.div>
            </a>
          </li>

          <li>
            <a href='mailto:dieh.diego@gmail.com'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img src={email} alt="email" />
            </motion.div>
            
            </a>
          </li>
        </ul>
      </aside>

      */