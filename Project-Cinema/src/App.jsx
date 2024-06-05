import React from 'react';
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard';
import './App.css';

function App() {
  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div>
        <RickAndMortyCharacterCard id={10} />
        {/* <RickAndMortyCharacterCard id={2} />
        <RickAndMortyCharacterCard id={3} />
        <RickAndMortyCharacterCard id={10} /> */}
      </div>
    </div>
  );
}

export default App;