import React from 'react'
import '../estilos/tablero.css'
import '../estilos/cuerpo.css'
import { useState } from 'react'


function BotoneraCentral({estadoCompartido,setEstadoCompartido},{caracteristicaColor}) {

    // const caracteristicaColor="Negro"
    // const tamaño='pequeño'
    // const [estadoCompartido,setEstadoCompartido]=useState(0)
 //manejadores de Clicks   
const [pulsado,setPulsado]= useState(null)

//    const handleClickPulsado=()=>{
//     setPulsado(true)
// }
// const handleClickNoPulsado=()=>{
//     setPulsado(false)
// }
// const handleClick=()=>{
//     setEstadoCompartido(estadoCompartido+1)
//   }
const handleClickContrario = ()=>{
    setPulsado(!pulsado)
}
  return (
    <section className='container-botonera' >
        {/* <button onClick={handleClickPulsado}>
            Pulsado
        </button>
        <button onClick ={handleClickNoPulsado}>
            No Pulsado
        </button> */}
        <button onClick={handleClickContrario}>
        {estadoCompartido}
        </button>
        <label >
        {pulsado?'Boton Pulsado':'Boton No pulsado'} 
        </label>
           <hr/>
        <b>{caracteristicaColor}</b>

        {/* <button onClick={handleClick}>Haz Click</button> */}
    </section>
  )
}

export default BotoneraCentral


