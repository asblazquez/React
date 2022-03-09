import logo from './logo.svg';
import './App.css';
//Importamos el componente creado
import Componente from './components/Componente';
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';

import { BrowserRouter } from 'react-router-dom';

import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

function App() {
  return (
    <div class = "bg-secondary">
      <div className="container">
        <div>
          <Header/>
          <ImageSlider/>
        </div> 
      </div>
    </div>
    
    
  );
}

export default withRouter(App);
