import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={style.Appbar}>
          <Toolbar style={style.Brand}>
            <Typography variant='h6'>Diego Pronesti</Typography>
            <section style={style.Menu}>
              <Link to='/' style={style.MenuA}>
                <Typography style={style.MenuLinks} variant='h6'>
                  Home
                </Typography>
              </Link>
              <Link to='/blog' style={style.MenuA}>
                <Typography style={style.MenuLinks} variant='h6'>
                  Blog
                </Typography>
              </Link>
              <a
                style={style.MenuA}
                href='https://drive.google.com/file/d/1nrfufMZC3klhV1tRadNptU1-aHY52QHG/view?usp=sharing'>
                <Typography style={style.MenuLinks} variant='h6'>
                  CV
                </Typography>
              </a>
            </section>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

const style = {
  Appbar: {
    backgroundColor: '#272727',
    display: 'auto'
  },
  Brand: {
    color: '#66FCF1',
    flex: 1
  },
  Menu: {
    display: 'flex',
    color: '#66FCF3',
    marginLeft: 'auto',
    marginRight: 5
  },
  MenuLinks: {
    padding: 10
  },
  MenuA: {
    textDecoration: 'none',
    color: 'inherit'
  }
};

export default Navbar;
