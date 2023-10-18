import React from 'react'
import ComponenteCoche from './ComponenteMarcador'
import ComponenteMarcador from './ComponenteMarcador'

function ComponenteGaraje(props) {
  const caracteristicasVehiculo = {
    colorVehiculo: 'Verde',
    nombreVehiculo: 'JuanJose',
    tamañoVehiculo: "Grande",
    puertasVehiculo: "5"
  }
  const lasPuertas = 45
  return (
    <div>
      <h3>{props.tituloComponente}</h3>
      {/* {props.nombre} tiene un coche de color {colorVehiculo} */}
      <ComponenteMarcador numeroPuertas={lasPuertas} tamaño={caracteristicasVehiculo.nombreVehiculo} caracteristicasVehiculo={caracteristicasVehiculo.colorVehiculo} />
      {/* <ComponenteMarcador numeroPuertas={caracteristicasVehiculo.puertasVehiculo} tamaño={caracteristicasVehiculo.tamañoVehiculo} caracteristicasVehiculo={caracteristicasVehiculo.tamañoVehiculo} /> */}
    </div>
  )
}

export default ComponenteGaraje