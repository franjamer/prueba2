import React from 'react'
import slot1 from './imagenes/granpremio.svg'
import slot2 from './imagenes/granpremio.svg'
import slot3 from './imagenes/granpremio.svg'
import slot4 from './imagenes/granpremio.svg'
import {objetoFiguras} from '../figuras'

export function tablero() {
let timeoutID;
    function setOutput(outputContent){
        document.querySelector("#output").textContent = outputContent;    
    }
    function delayedMessage(segundos){
        setOutput("");
        const tiempoSeg= segundos* 1000;
        timeoutID = setInterval(setOutput, tiempoSeg ,  console.log('tiempo pasado 2 segundos otra vez'));       
    }
    function clearMessage() {
        clearInterval(timeoutID)        
        console.log('tiempo cancelado')
        console.log(objetoFiguras.ruta)
    }
    return (  
<>
    <section className='container-tablero'>
            <div className='tablero-img'>
                <img className='img-slot'src={slot1} 
                alt = 'imagen de figura' />
                <button className='boton-slot'>
                    Avance
                </button>
            </div>
            <div className='tablero-img'>
                <img className='img-slot'src={slot2} 
                alt = 'imagen de figura' />
                <button className='boton-slot'>
                    Avance
                </button>
            </div>
            <div className='tablero-img'>
                <img className='img-slot'src={slot3} 
                alt = 'imagen de figura' />
                <button className='boton-slot'>
                    Avance
                </button>
            </div>
            <div className='tablero-img'>
                <img className='img-slot'src={slot4} 
                alt = 'imagen de figura' />
                <button className='boton-slot'>
                    Avance
                </button>
            </div>
        </section>  
        <section className='container-botonera'>
        <button>Cobrar</button>
        <button>Jugar</button>
        <button>Apuesta</button>
        <button>===</button>            
        </section>
        <section>
            seccion de prueba de tiempos y temporizadores
            <button onClick={delayedMessage} >Mensaje para msotrar despues de 2 segundos</button>
            <button onClick={clearMessage}>Cancelar mensaje antes de que suceda</button>
        <div id="output"></div>
    </section>
</>
)
}
