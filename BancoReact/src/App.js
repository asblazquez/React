import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <br/>
        <br/>
        <br/>
        <div className='container'>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/register' element = {<Register/>}/>
        </Routes>
        </div> 
        <Footer/>    
      </Router>
    </div> 
  );
}

export default (App);
