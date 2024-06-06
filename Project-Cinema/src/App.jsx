import {useState,useEffect} from 'react';
import './App.css';
import Card from './components/characterCard';
import Navbar from './components/Navbar';
import myImage from './assets/RickAndMorty.png';

/* En la tarea anterior definí la siguiente función, la cual se llama desde App.jsx
   Sin embargo, adjunto el texto:
  function RickAndMortyCharacterCard({id}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [gender, setGenre] = useState('');
    const [status, setStatus] = useState('');
  
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(result => {
          setName(result.name);
          setImage(result.image);
          setGenre(result.gender);
          setStatus(result.status);
        });
    }, [id]);

  return (
    <div>
      <CharacterCard 
        name={name}
        image={image}
        gender={gender}
        status={status}
      />
    </div>
  );

  function App() {
  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div>
        <RickAndMortyCharacterCard id={10} />
        </div>
        </div>
      );
    }
  export default App;
  }*/

function App() {

    const [page,setPage]=useState(1);
    const [info,setInfo]=useState({});
    const[character,setCharacter]=useState([]);
    useEffect(()=>{
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response)=>response.json())
      .then((data)=>{
        setCharacter(data.results)
        setInfo(data.info)
      })
    },[page]);
    console.log(info.pages);
    const incPage=()=>{
      setPage(page+1);
    }
    return (
      <>
        <div className='image-container'>
          <img src={myImage} alt="Descripción de la imagen" class="image"/>
        </div>
        <Navbar currentPage={page} setPage={setPage} lastPage={info.pages}/>
        {/* <button className='button' onClick={incPage}>Pagina {page}</button> */}
        <div className='container'>          
          {character.lenght !==0 && character.map((char)=>(
            <Card key={char.id} name={char.name} image={char.image}
            alt={char.name} status={char.status} gender={char.gender}/>
        ))}
          
        </div>               
      </>
    );
  };

export default App;