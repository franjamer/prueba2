

import React from 'react'
import '../estilos/tablero.css'
import { ObjetoFiguras } from '../ObjetoFiguras'
function SlotTablero() {
  
  return (
    <div className='tablero-img'>
      <img className='img-slot' src={ObjetoFiguras[0].ruta} alt='imagen de figura' />
      <button className='boton-slot'>
        Avance
      </button>
    </div>
  )
}

export default SlotTablero