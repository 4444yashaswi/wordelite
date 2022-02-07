import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/NavBar'
import Grid from '../Grid/Grid'
import Keyboard from '../Keyboard/Keyboard';
import './Main.css'


const Main = () => {

  const [word,setWord] = useState("");
  // Listening Key Press
  document.addEventListener('keypress', (e) => {
    console.log(word);  // issue raised 
    const temp = e.key;
    setWord(word+temp);
  });

  return <div className='Main-wrapper'>
      <Navbar />
      <Grid />
      {(word)?<p style={{color:"white"}}>{word}</p>:""}
      <Keyboard />
  </div>;
};

export default Main;
