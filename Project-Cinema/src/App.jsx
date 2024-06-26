import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FilterProvider } from './contexts/FilterContext';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import EpisodesPage from './pages/EpisodesPage';
import NotFoundPage from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <FilterProvider>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/characters" element={<CharacterPage/>} />
          <Route path="/episodes" element={<EpisodesPage/>} />
          <Route element={<NotFoundPage/>} />
        </Routes>
        </FilterProvider>        
      </div>
    </Router>
  );
}

export default App;