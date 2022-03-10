import './App.css';
//Importamos el componente creado

import Main from './components/MainComponent';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div class = "bg-secondary">
      <div className="container">
        <div>

          
          <Main/>
          

        </div> 
      </div>
    </div>
  );
}

export default (App);
