
import { useState } from 'react'
import React from 'react'
import '../estilos/tablero.css'
import { ObjetoFiguras } from '../ObjetoFiguras'
// import ComponenteGaraje from '../ComponenteGaraje'
import ComponenteMarcador from '../ComponenteMarcador'
function SlotTablero(props) {
  const numeroTiradas = 'Numero de Tiradas'
  const [estadoCompartido,setEstadoCompartido]=useState(0)
  const handleClick=()=>{
    setEstadoCompartido(estadoCompartido+1)}
  return (
    <div className='tablero-img'>
      <img className='img-slot' src={ObjetoFiguras[0].ruta} alt='imagen de figura' />
      <button className='boton-slot'mensaje={props.mensaje} onClick={handleClick} >
        avance
      </button>
      <ComponenteMarcador NombreMarcador={numeroTiradas}  valorMarcador={estadoCompartido}/>
    </div>
  )
}

export default SlotTablero





