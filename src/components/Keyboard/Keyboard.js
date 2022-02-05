import React from 'react';
import BoardRow from '../UI Elements/Board-Row/Board-Row';
import './Keyboard.css'

const Keyboard = () => {
    const row1 = ['q','w','e','r','t','y','u','i','o','p'];
    const row2 = ['a','s','d','f','g','h','j','k','l'];
    const row3 = ['Enter','z','x','c','v','b','n','m','<-'];
  
  
    return <div className='keyboard-wrapper'>
        <BoardRow row={row1} />
        <BoardRow row={row2} className="keyboard--mid-row"/>
        <BoardRow row={row3} />
    </div>;
};

export default Keyboard;
