// import logo from './logo.svg';
import './header.css'
 function Cabecera( ){
    return (
        <header className="App-header">
                  <h1>Marcador de Tragaperras</h1> 
          <div className='contenedor-marcador'>
  
            <label>
              Cantidad de Bote
              <input type='number'/>
            </label>
            <label>
              Apuesta
              <input type='number'/>
            </label>
            <label>
              Numero de tiradas
              <input type='number' min={3}value={3}/>
            </label>
           {/* <img 
          src={logo} 
          className="App-logo" 
          alt="logo"
          />             */}
          {/* <p>
            Hola, este componente es la Cabecera
          </p>  */}
   
        </div>
        </header>
      )
    }
    export default Cabecera;

