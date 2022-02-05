import React from 'react';
import Navbar from '../Navbar/NavBar'
import Grid from '../Grid/Grid'
import Keyboard from '../Keyboard/Keyboard';
import './Main.css'


const Main = () => {
  return <div className='Main-wrapper'>
      <Navbar />
      <Grid />
      <Keyboard />
  </div>;
};

export default Main;
