import { useContext, useState, useEffect } from 'react';
import '../App.css';
import Card from '../components/characterCard';
import { Link } from 'react-router-dom';
import FilterContext from '../contexts/FilterContext';
import Navbar from '../components/Navbar';
import myImage from '../assets/RickAndMorty.png';
import logo from '../assets/LogoHome.png';


function CharacterPage() {
    const { filters, setFilters } = useContext(FilterContext);
    const [nameFilter, setNameFilter] = useState(filters.name || '');
    const [genderFilter, setGenderFilter] = useState(filters.gender || '');
    const [speciesFilter, setSpeciesFilter] = useState(filters.species || '');   
    const [charactersList, setCharactersList] = useState([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({});
    const [error,setError]=useState('');
  
    useEffect(() => {
      fetchCharacters();
    }, [page,filters]);
  
    const fetchCharacters = () => {
      const filterParams = new URLSearchParams({
        name: filters.name,
        gender: filters.gender,
        species: filters.species,
        page: page,
      });  
      fetch("https://rickandmortyapi.com/api/character/?" + filterParams)
        .then((response) => response.json())
        .then((data) => {
          if(data.results){            
            setCharactersList(data.results);
            setInfo(data.info);
            setTotalCharacters(data.info.count);
            setError('');
            console.log(data.info.pages);
          }else{
            setCharactersList([]);
            setInfo({});
            setTotalCharacters(0);
            setError('No se encontraron personajes');
          }        
        })
        .catch((error) => {
          console.error("Error de fetching:", error);
          setError('Error al cargar los personajes');
        });
        
    };
  
    const onSearch = () => {
      setPage(1);
      setFilters({
        name: nameFilter,
        gender: genderFilter,
        species: speciesFilter,
      });     
    };  
    
    return (
      <div className='App'>
        <div className='navigation-links'>
          <Link to="/">
            <img src={logo} alt="Home" className='button'/>
          </Link>
          <Link to="/">
            <img src={myImage} alt="Descripción de la imagen" className="image"/>
          </Link>
          <Link to="/episodes">
            <button className='button'>Episodios</button>          
          </Link>           
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
            <Card key={char.id} name ={char.name} image={char.image}
            alt={char.name} status={char.status} gender={char.gender}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default CharacterPage;