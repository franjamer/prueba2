import Cabecera from './Header';
import './App.css';

import Cuerpo from './body';
import PieDePagina from './Footer';
 function App() {
  return (
    <div className="App">    
     
      <Cabecera />     
      <Cuerpo />
      <PieDePagina />
   
    </div>
  );
}

export default App;
