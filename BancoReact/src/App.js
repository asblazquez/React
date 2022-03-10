import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <div className='container'>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
        </Routes>
        </div> 
        <Footer/>    
      </Router>
    </div> 
  );
}

export default (App);
