import React from 'react';

function Image(props) {
    const {src,alt}=props;
    // Recuerda que este es solo un componente funcional, 
    // tu debes incluir estilos para hacerlo más atractivo
    return <img src={props.src} alt={props.alt} style={{ borderRadius: '50%', width: '180px', height: '180px' }} />;
  }

/*const Image = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ borderRadius: '50%', width: '180px', height: '10px' }} />;
};*/

export default Image;