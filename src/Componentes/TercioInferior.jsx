import React from 'react'
import { ObjetoFiguras } from '../ObjetoFiguras'
import tablaDePremios from '../imagenes/tabla-combos-solo.svg'
import '../estilos/style.css'
function TercioInferior() {
  return (
<section className="tercio-inferior">
        <button id="boton"class="superBoton">
            Iniciar Tirada
        </button>
    {/* <div className="combos">
        <img className="img-tabla-combos" width="100%" height="100%" src={tablaDePremios} alt="tabla de premios"/> 
    </div>            */}
    <div className="img-individuales">
    <label>
        Valores Individuales
        </label>
    <section className="img-filas">
        <label>
            0.05
        <img width="10%" height="10%" src={ObjetoFiguras[0].ruta}alt={ObjetoFiguras[0].nombre}/>                 
        </label>        
        <label>
            0.1
            <img  width="10%" height="10%" src={ObjetoFiguras[1].ruta} alt={ObjetoFiguras[1].nombre}/>             
        </label>              
        <label>
            0.2
            <img  width="10%" height="10%" src={ObjetoFiguras[2].ruta} alt={ObjetoFiguras[2].nombre}/>           
        </label>
    </section>                                              
    <section className="img-filas">
        <label>
            0.5
            <img  width="10%" height="10%" src={ObjetoFiguras[3].ruta} alt={ObjetoFiguras[3].nombre}/> 
        </label>    
        <label>
            1
            <img    width="10%" height="10%" src={ObjetoFiguras[4].ruta} alt={ObjetoFiguras[4].nombre}/>       
          </label>            
        <label>
            2
    
            <img    width="10%" height="10%" src={ObjetoFiguras[5].ruta} alt={ObjetoFiguras[5].nombre}/> 
          </label>      
   
    </section>
    <section className="img-filas">
        <label>
            5
            <img    width="10%" height="10%" src={ObjetoFiguras[6].ruta}alt={ObjetoFiguras[6].nombre}/>       
        </label>      
        <label>
            10
            <img   width="10%" height="10%" src={ObjetoFiguras[7].ruta} alt={ObjetoFiguras[7].nombre}/>        
        </label>      
        <label>
            20
            <img   width="10%" height="10%" src={ObjetoFiguras[8].ruta} alt={ObjetoFiguras[8].nombre}/>  
        </label>    
    </section>

    </div>
</section>

  )
}
export default TercioInferior