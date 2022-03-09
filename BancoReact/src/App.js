import logo from './logo.svg';
import './App.css';
//Importamos el componente creado
import Componente from './components/Componente';
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import Button from 'react-bootstrap/Button';

import { BrowserRouter } from 'react-router-dom';

import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
      
    </div>
      
  );
}

export default withRouter(App);
