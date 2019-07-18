import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home, Blog} from './views/'
import {Navbar} from './components/';

import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';
import {purple, teal} from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: purple,
  },
  status: {
    danger: 'orange',
  },
});

console.log(theme)

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <MuiThemeProvider theme={theme} >
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/blog" component={Blog} />
    </Switch>
    </Router>
    </MuiThemeProvider >
  );
}

export default App;
