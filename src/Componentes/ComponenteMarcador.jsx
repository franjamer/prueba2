import React from 'react'

function ComponenteMarcador(props,{estado,setEstado}) {
  // const vehiculoColor='Azul Marino'
  
  const handleClick =()=>{
    const numero =1
    setEstado(numero+1)
  }

  return (
    <>
     
     <label>{props.NombreMarcador}
    <input type='text' value={estado} onClick={handleClick} placeholder={props.valorMarcador} /> 
      
    </label> 
    <p>
      {estado}
    </p>
   </>
    
    
  )
}

export default ComponenteMarcador