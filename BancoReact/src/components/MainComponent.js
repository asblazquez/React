//Importamos el componente creado
import React from 'react';
import Componente from './Componente';

import Header from './Header';
import Login from './Login';
import ImageSlider from './ImageSlider';

import Button from 'react-bootstrap/Button';

import {Switch,Route,Redirect,withRouter,Routes} from 'react-router-dom'

function Main() {
  return (
      <React.Fragment>

    <div className="container">
      <Header/>
      <ImageSlider/>
      {/* Sección nueva */}
      <div>

      <Routes>
      <Route path='/Login' component={Login}/>
      </Routes>
       
      
      </div>
    </div>
    
    </React.Fragment>
  );
}

export default (Main);