import React from 'react';


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
  },
  Buttons:{
    display: 'inline-block',
    height: '100%',
    width: '50px',
    padding: 5,
    border: 'none',
    color: '#66FCF3',
    backgroundColor: '#272727',
  }
}

const BottomNavbar = () => {
  return (
    <React.Fragment>
    <div style={style.Bar}>
    <button style={style.Buttons}>Home</button>
    <button style={style.Buttons}>Blog</button>
    <button style={style.Buttons}>Contact</button>
    <button style={style.Buttons}>CV</button>
    </div>
    </React.Fragment>
  )
}

export default BottomNavbar
