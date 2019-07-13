import React from 'react';
import {ProfileCard, ProjectList} from '../components/';
import {Grid} from '@material-ui/core';

const Home = () => {
  return (
    <React.Fragment>
    <Grid container spacing={3}>
    <Grid item xl={12}><ProfileCard /></Grid>
    <Grid item xl={12}><ProjectList /></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
