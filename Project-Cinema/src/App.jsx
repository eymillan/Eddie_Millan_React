import { useState,useEffect } from 'react';
import './App.css';
import Card from './components/characterCard';
import Navbar from './components/Navbar';
import myImage from './assets/RickAndMorty.png';


function App() {
    const [nameFilter, setNameFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [speciesFilter,setSpeciesFilter]=useState('');
    const [charactersList, setCharactersList] = useState([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({});
    const [error,setError]=useState('');
  
    useEffect(() => {
      fetchCharacters();
    }, [page]);
  
    const fetchCharacters = () => {
      const filterParams = new URLSearchParams({
        name: nameFilter,
        gender: genderFilter,
        species: speciesFilter,
        page: page,
      });  
      fetch("https://rickandmortyapi.com/api/character/?" + filterParams.toString())
        .then((response) => response.json())
        .then((data) => {
          if(data.results){
            const speciesSet = new Set(data.results.map(character => character.species));
            console.log([...speciesSet]);
            setCharactersList(data.results);
            setInfo(data.info);
            setTotalCharacters(data.info.count);
            setError('');
            console.log(data);
          }else{
            setCharactersList([]);
            setInfo({});
            setTotalCharacters(0);
            setError('No se encontraron personajes');
          }        
        });
        
    };
  
    const onSearch = () => {
      setPage(1); 
      fetchCharacters();      
    };  
      
    return (
      <div className='App'>
         <div className='image-container'>
          <img src={myImage} alt="Descripción de la imagen" className="image"/>
        </div>
        <div className="filters">
          <input
            type="text"
            placeholder="Nombre"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="">Seleccione Género</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
          <select
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
          >
            <option value="">Seleccione Especie</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="humanoid">Humanoid</option>
            <option value="poopybutthole">Poopybutthole</option>
            <option value="Mythological Creature">Mythological Creature</option>
            <option value="animal">Animal</option>
            <option value="disease">Disease</option>
            <option value="robot">Robot</option>
            <option value="cronenberg">Cronenberg</option>
            <option value="unknown">Unknown</option>      
          </select>
          <button onClick={onSearch} className="button">Buscar</button>
        </div>
        <div className="number">
          <h4>Personajes hallados: {totalCharacters}</h4>
          {error && <p className="error">{error}</p>}
        </div>      
        <div>
          {!error&&<Navbar currentPage={page} setPage={setPage} lastPage={info.pages}/>}
        </div>
        
        <div className="character-list">
          {charactersList.lenght !==0 && charactersList.map((char) => (
            <Card key={char.id} name={char.name} image={char.image}
            alt={char.name} status={char.status} gender={char.gender}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default App;