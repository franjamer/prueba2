import React from 'react'
// import { ObjetoFiguras } from '../ObjetoFiguras'
import SlotTablero from './SlotTablero'
import BotoneraCentral from './BotoneraCentral'
export default function Tablero() {
    return (
        <>
            <section className='container-tablero'>
                <SlotTablero  />
                <SlotTablero />
                <SlotTablero />
            </section>
      
            <BotoneraCentral />
        </>
    )
}

