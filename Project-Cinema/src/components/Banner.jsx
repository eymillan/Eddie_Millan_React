import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Bienvenido al mundo desconocido de Rick and Morty</h1>
      <Link to="/characters">
        <button className='button'>Personajes</button>
      </Link>
      <Link to="/episodes">
        <button className='button'>Episodios</button>
      </Link>
    </div>
  );
};

export default Banner;