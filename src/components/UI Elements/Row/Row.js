import React from 'react';
import './Row.css'

import Tile from '../Tiles/Tile';
const Row = () => {
  return <div className='row'>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
  </div>;
};

export default Row;
