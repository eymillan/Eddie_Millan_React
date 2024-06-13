import React from 'react';

function DetailsEpisode(props) {
    //const {air_date,episode}=props;
    // Recuerda que este es solo un componente funcional, 
    // tu debes incluir estilos para hacerlo más atractivo
    function formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
    

    return (
      <div>
          <p>
            <b>Fecha:</b> {formatDate(props.air_date)}
          </p>
          <p>
            <b>Episodio:</b> {props.episode}
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
export default DetailsEpisode;