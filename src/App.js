import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home} from './views/'
import {Navbar, BottomNavbar} from './components/';

const isMobile = window.innerWidth <= 500

const App = () => {
  return (
    <React.Fragment>
    {isMobile ? (<BottomNavbar />) : (<Navbar />)}
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
