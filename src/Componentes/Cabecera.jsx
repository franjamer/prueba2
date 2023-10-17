// import logo from './logo.svg';
import '../estilos/cabecera.css'
function Cabecera() {
  return (
    <header className="cabecera-marcador">
      <h1>Tragaperras Digital</h1>
      <h3>Marcador de Tragaperras</h3>
      <div className='contenedor-marcador'>

        <label>
          Cantidad de Bote
          <input type='number' placeholder='Cantidad en Bote' />
        </label>
        <label>
          Apuesta
          <input type='number'  placeholder='Cantidad Apostada'/>
        </label>
        <label>
          Numero de tiradas
          <input type='number' min={3} value={3} />
        </label>
      </div>
    </header>
  )
}
export default Cabecera;

