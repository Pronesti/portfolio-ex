import React from 'react';
import { FaHome, FaFeatherAlt, FaFileAlt } from 'react-icons/fa';
import {IconContext} from 'react-icons';


const style ={
  Bar:{
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left:0,
    backgroundColor: '#272727',
    color: 'white',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 100,
  },
  Buttons:{
    display: 'inline-block',
    height: '100%',
    width: '50px',
    padding: 5,
    border: 'none',
    color: '#66FCF3',
    backgroundColor: '#272727',
    marginRight: 10,
    marginLeft: 10,
  }
}

const BottomNavbar = () => {
  return (
    <React.Fragment>
    <IconContext.Provider value={{size: "2em"}}>
    <div style={style.Bar}>
    <button style={style.Buttons}><FaHome /></button>
    <button style={style.Buttons}><FaFeatherAlt /></button>
    <a style={style.Buttons} href="https://drive.google.com/file/d/1nrfufMZC3klhV1tRadNptU1-aHY52QHG/view?usp=sharing"><FaFileAlt /></a>
    </div>
    </IconContext.Provider>
    </React.Fragment>
  )
}

export default BottomNavbar
