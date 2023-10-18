import { useState } from 'react';
import '../estilos/cuerpo.css'

import '../estilos/tablero.css'
import TercioInferior from './TercioInferior';
import Botones from './Botones';


export default function Cuerpo() {
    const [estadoCompartido,setEstadoCompartido]=useState(0)
    const [estadoCompartidoCabecera,setEstadoCompartidoCabecera]=useState(0)
        const handleClick=()=>{
            setEstadoCompartido(estadoCompartido+1)
            setEstadoCompartidoCabecera(estadoCompartidoCabecera+1)
        }

    return (
        <div className='cuerpo'>           
            <button onClick={handleClick}>pulsame</button>
            
            <p>{estadoCompartido}</p>          
            <Botones />
        </div>
    )
}
