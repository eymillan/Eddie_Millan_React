import {useState,useEffect} from 'react';
import CharacterCard from './characterCard';

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
}

export default RickAndMortyCharacterCard;