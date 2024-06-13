import React from 'react';
import Banner from '../components/Banner';
import myImage from '../assets/RickAndMorty.png';


const HomePage = () => {
  return (
    <div className>
      <div className='image-container'>
          <img src={myImage} alt="Descripción de la imagen" className="image"/>
      </div>
      <Banner />
    </div>
  );
};

export default HomePage;