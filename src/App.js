import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home, Blog} from './views/'
import {Navbar, BottomNavbar} from './components/';

const isMobile = window.innerWidth <= 500

const App = () => {
  return (
    <React.Fragment>
    <Router>
    {isMobile ? (<BottomNavbar />) : (<Navbar />)}
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/blog" component={Blog} />
    </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
