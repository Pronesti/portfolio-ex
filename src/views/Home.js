import React from 'react';
import { ProfileCard, ProjectList } from '../components/';
import { Grid, GridList,GridListTile } from '@material-ui/core';

const Home = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3} justify='center' alignItems='center'>
        <Grid item xs={12} />
        <Grid lg={12} justify='center' alignItems='center'>
        <Grid item xs={12} sm={6}> <ProfileCard /> </Grid>
        <Grid item xs={12} sm={6}> <ProjectList /> </Grid>    
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
