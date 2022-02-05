import React from 'react';
import Key from '../Key/Key';
import './Board-Row.css'

const BoardRow = (props) => {
    
  return <div className='board-row'>
      {props.row.map((key,i) => {
          return <Key value={key} />
      })}
  </div>;
};

export default BoardRow;
