import logo from './logo.svg';
import './App.css';
//Importamos el componente creado
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';

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

export default App;
