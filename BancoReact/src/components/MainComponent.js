//Importamos el componente creado
import React from 'react';
import Componente from './Componente';

import Header from './Header';
import Login from './Login';
import ImageSlider from './ImageSlider';

import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function Main() {
  return (
      <React.Fragment>

    <div className="container">
      <Header/>
      <ImageSlider/>
      {/* Sección nueva */}
      <div>

      <Router>
        <Routes>
          <Route path='/login' element={ <Login /> }/>
        </Routes>
      </Router>
      
      </div>
    </div>
    
    </React.Fragment>
  );
}

export default (Main);