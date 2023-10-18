import React from 'react';

function Botones({ onClickCabecera, onClickBote, onClickApuestas, onClickTiradas }) {
  return (
    <div>
      <button onClick={onClickCabecera}>Aumenta Cabecera</button>
      <button onClick={onClickBote}>Aumenta Bote</button>
      <button onClick={onClickApuestas}>Aumenta Apuestas</button>
      <button onClick={onClickTiradas}>Aumenta Tiradas</button>
    </div>
  );
}

export default Botones;