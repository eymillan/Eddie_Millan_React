import React from 'react';

function Details(props) {
    const {gender,status}=props;
    // Recuerda que este es solo un componente funcional, 
    // tu debes incluir estilos para hacerlo más atractivo
    return (
      <div>
          <p>
            <b>Género:</b> {props.gender}
          </p>
          <p>
            <b>Estado:</b> {props.status}
          </p>
      </div>
    );
  }
/*const Details = ({ status, species, gender, origin }) => {
    return (
        <div>
            <p><b>Estado:</b> {status}</p>            
            <p><b>Género:</b> {gender}</p>           
        </div>
    );
};*/
export default Details;