// import sandia from './sandia.svg'
import '../estilos/cuerpo.css'
// import BotoneraCentral from './BotoneraCentral';
import Tablero from './Tablero';
import '../estilos/tablero.css'
// import PieDePagina from './PieDePagina';
import TercioInferior from './TercioInferior';
export default function Cuerpo() {
    return (
        <div className='cuerpo'>           
            <Tablero />         
            <TercioInferior />
        </div>
    )
}
