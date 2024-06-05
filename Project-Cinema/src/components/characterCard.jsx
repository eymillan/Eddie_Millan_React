import React from 'react';
import Title from './title';
import Image from './image';
import Details from './details';


/*const Data = {
    name: 'Albert Einstein',
    image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    status: 'Muerto',
    gender: 'Hombre'
};*/

function Card(props){

    return(
        <div className="card">
        <Image src={props.image} alt={props.name} />
        <Title name={props.name} />
        <Details 
            status={props.status}
            gender={props.gender}
        />
    </div> 
    )
}
/*const Card = () => {
    return (
        <div className="card">
            <Image src={Data.image} alt={Data.name} />
            <Title name={Data.name} />
            <Details 
                status={Data.status}
                gender={Data.gender}
            />
        </div>
    );
};*/

export default Card;