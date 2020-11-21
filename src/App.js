import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Header from './components/Header/Header';


import Profile from './components/Profile/Profile';

import './App.css';
function App() {
  return (
  <Container>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Profile />
      </Grid>

      <Grid item xs={8}>
        <Header />
      </Grid>
    </Grid>
  </Container>
    
  );
}

export default App;
