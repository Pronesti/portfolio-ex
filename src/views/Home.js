import React from 'react';
import { ProfileCard, ProjectList } from '../components/';
import { Grid } from '@material-ui/core';

const Home = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3} justify='center' alignItems='center'>
        <Grid item xs={12} />
        <Grid item xs={12}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} md={6} xl={6}>
          <ProjectList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
