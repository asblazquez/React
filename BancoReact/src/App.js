import logo from './logo.svg';
import './App.css';
//Importamos el componente creado
import Componente from './components/Componente';
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import Main from './components/MainComponent';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div class = "bg-secondary">
      <div className="container">
        <div>
          <BrowserRouter>
          <Main/>
          </BrowserRouter>
        </div> 
      </div>
    </div>
    
    
  );
}

export default (App);
