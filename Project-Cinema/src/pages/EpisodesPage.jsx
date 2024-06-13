import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/characterCard';
import myImage from '../assets/RickAndMorty.png';
import logo from '../assets/LogoHome.png'

function EpisodesPage() {
  const [episodesList, setEpisodesList] = useState([]);
  const [totalEpisodes, setTotalEpisodes] = useState(0);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEpisodes();
  }, [page]);

  const fetchEpisodes = () => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setEpisodesList(data.results);
          setInfo(data.info);
          setTotalEpisodes(data.info.count);
          setError('');
        } else {
          setEpisodesList([]);
          setInfo({});
          setTotalEpisodes(0);
          setError('No se encontraron episodios');
        }
      })
      .catch((error) => {
        console.error("Error de fetching:", error);
        setError('Error al cargar los episodios');
      });
  };

  return (
    <div className='App'>
        <div className='navigation-links'>
          <Link to="/" className='logo-container'>
            <img src={logo} alt="Home" className='button'/>
          </Link>
          <Link to="/">
            <img src={myImage} alt="Descripción de la imagen" className="image"/>
          </Link>
          <Link to="/characters">
            <button className='button'>Personajes</button>          
          </Link>           
        </div>
      <div className="number">
        <h4>Episodios encontrados: {totalEpisodes}</h4>
        {error && <p className="error">{error}</p>}
      </div>
      <div>
        {!error && <Navbar currentPage={page} setPage={setPage} lastPage={info.pages} />}
      </div>
      <div className="character-list">
        {episodesList.length !== 0 && episodesList.map((episode) => (
            <Card key={episode.id} name={episode.name} airDate={episode.airDate}
            episode={episode.episode}/>
        ))}
      </div>     
    </div>
    
  );
}
export default EpisodesPage;