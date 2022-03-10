//Importamos el componente creado
import React from 'react';
import Componente from './components/Componente';

import Header from './components/Header';
import Login from './components/Login';
import ImageSlider from './components/ImageSlider';

import Button from 'react-bootstrap/Button';

import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

function Main() {
  return (
      <React.Fragment>

    <div className="container">
      <Header/>
      <ImageSlider/>
      {/* Sección nueva */}
      <div>

      <Switch>
      <Route path='/Login' component={Login}/>
      </Switch>  
      
      </div>
    </div>
    
    </React.Fragment>
  );
}

export default withRouter(Main);