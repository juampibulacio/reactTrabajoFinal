
import './App.css';
import Navbar from './componentes/navbar';
import Item from './componentes/Item';
import ItemListContainer from './componentes/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    
          <BrowserRouter>
          <Navbar/>
          <Routes>
          <Route path="/" element = {<ItemListContainer/>}/>
          <Route path="/detalle/:id" element = {<ItemDetailContainer/>}/>
          <Route path="/category/:categoryid" element = {<ItemListContainer/>}/>
          <Route path="*" element = {<h1>error 404 not found</h1>}/>
          </Routes>
          </BrowserRouter>
  
  );
}

export default App;
