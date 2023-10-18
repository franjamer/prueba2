import React, { useState } from 'react';
import './estilos/App.css';
import Cabecera from './Componentes/Cabecera';
import Cuerpo from './Componentes/Cuerpo';
import ComponenteMarcador from './Componentes/ComponenteMarcador';
// import ComponenteGaraje from './ComponenteGaraje';
// import ComponenteCoche from './ComponenteMarcador';
// import BotoneraCentral from './Componentes/BotoneraCentral';
// import SlotTablero from './Componentes/SlotTablero';

function App({ estadoCompartido, setEstadoCompartido }) {
  const [estado, setEstado] = useState(0)
  const nombreMarcador = 'Prueba'
  const handleClick = () => {
    setEstado(estadoCompartido + 1)
    setEstado(estado + 1)
  }
  return (
    <div className="App">
      <Cabecera estado={estadoCompartido} />
      <Cuerpo estado={estado} setEstado={setEstado} />

      {/* <SlotTablero/> */}
      <hr />
      <section >
        <button onClick={handleClick}>boton</button>
        <ComponenteMarcador NombreMarcador={nombreMarcador} valorMarcador={estado} />
        {/* <p>{valorMarcador}</p> */}
        <p>{estadoCompartido} qq</p>
        <p>{estado} rr</p>
      </section>
    </div>
  );
}

export default App;
