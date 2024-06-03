import React from 'react';

function Title(props) {
    const {name}=props;
    // Recuerda que este es solo un componente funcional, 
    // tu debes incluir estilos para hacerlo más atractivo
    return <h2>{props.name}</h2>;
  }
/*const Title = ({ name }) => {
    return <h2>{name}</h2>;
};*/

export default Title;