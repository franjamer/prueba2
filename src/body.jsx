// import sandia from './sandia.svg'
import './body.css'
import {tablero as Tablero} from './Tablero';
import './tablero.css'
export default function Cuerpo(){
    return(
        <div className='cuerpo'>
            <h1 className='cabecera-H1'>
                TRAGAPERRAS DIGITAL
            </h1>
          <Tablero />
          
        </div>
    )
}
