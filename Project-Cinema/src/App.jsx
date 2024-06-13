import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import EpisodesPage from './pages/EpisodesPage';
import NotFoundPage from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/characters" element={<CharacterPage/>} />
          <Route path="/episodes" element={<EpisodesPage/>} />
          <Route element={NotFoundPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;