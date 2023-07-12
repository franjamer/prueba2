import granpremio from './granpremio.svg';
import './footer.css'
function PieDePagina(){
    return(
        <footer className='contenedor-footer'>       
            <div>
                Este es el pie de página con una imagen que gira sobre si misma, y se mueve de lado a lado de la pantalla.
            </div>
            <img src={granpremio} className='img-footer mueve-cuadrado'  alt="gran premio dando vueltas"/>           
        </footer>
    )
}
export default PieDePagina;