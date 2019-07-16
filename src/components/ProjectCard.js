import React from 'react';
import { Grid } from '@material-ui/core';
import moment from 'moment';
import { motion } from 'framer-motion';

const ProjectCard = project => {
  const { name, created_at, html_url } = project.project;
  return (
    <Grid item xs>
      <motion.div
        className='container'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <article className='card'>
          <a href={html_url} className='card__link'>
            <div className='card__header'>
              <h3 className='card__header-title'>{name}</h3>
              <p className='card__header-meta'>
                {moment(created_at).fromNow()}
              </p>
            </div>
          </a>
        </article>
      </motion.div>
    </Grid>
  );
};

export default ProjectCard;
