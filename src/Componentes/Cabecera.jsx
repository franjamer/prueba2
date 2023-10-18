
import { useState } from 'react';
import ComponenteMarcador from './ComponenteMarcador';
import '../estilos/cabecera.css'
import Botones from './Botones';
function Cabecera() {
  const [estadoCompartidoCabecera, setEstadoCompartidoCabecera] = useState(0)
  const [estadoCompartidoApuestas, setEstadoCompartidoApuestas] = useState(0)
  const [estadoCompartidoBote, setEstadoCompartidoBote] = useState(0)
  const [estadoCompartidoTiradas, setEstadoCompartidoTiradas] = useState(0)
  const cantidadBote = 'Cantidad de bote'
  const cantidadApuesta = 'Apuesta'
  const numeroTiradas = 'Numero de Tiradas'
  const handleClickCabecera = () => {
    setEstadoCompartidoCabecera(estadoCompartidoCabecera + 1)
  }
  const handleClickBote = () => {
    setEstadoCompartidoBote(estadoCompartidoBote + 1)
  }
  const handleClickApuestas = () => {
    setEstadoCompartidoApuestas(estadoCompartidoApuestas + 1)
  }

  const handleClickTiradas = () => {
    setEstadoCompartidoTiradas(estadoCompartidoTiradas + 1)
  }

  return (
    <header className="cabecera-marcador">
      <h1>Tragaperras Digital</h1>
      <h3>Marcador de Tragaperras</h3>
      <div className='contenedor-marcador'>
        <ComponenteMarcador NombreMarcador={cantidadBote} valorMarcador={estadoCompartidoBote} />
        <ComponenteMarcador NombreMarcador={cantidadApuesta} valorMarcador={estadoCompartidoApuestas} />
        <ComponenteMarcador NombreMarcador={numeroTiradas} valorMarcador={estadoCompartidoTiradas} />
        <p>{estadoCompartidoCabecera}</p>
        <Botones
          onClickCabecera={handleClickCabecera}
          onClickBote={handleClickBote}
          onClickApuestas={handleClickApuestas}
          onClickTiradas={handleClickTiradas}
        />
      </div>
    </header>
  )
}
export default Cabecera;

