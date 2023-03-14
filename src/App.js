import logo from './logo.svg';
import './App.css';
import Button from './componentes/button';
import Saludo from './componentes/saludo';
import Navbar from './componentes/navbar';
import ItemListContainer from './componentes/itemListContainer';

function App() {
  return (
    <div className="App">
  <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac

        
          <ItemListContainer text="hola"/>
          


          <Saludo text="saludos terricola"/>

          <Button color="purple" text="soy un texto"/>



        </a>
        
      </header>
      
    </div>
  );
}

export default App;
