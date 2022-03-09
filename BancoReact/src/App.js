import logo from './logo.svg';
import './App.css';
//Importamos el componente creado
import Componente from './components/Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eres mas manco que Yair17
        </p>
        <p>Eres una bonita persona a.MICO</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Sección nueva */}
      <section>
        {/* Simplificación del componente */}
        <Componente/>
      </section>
    </div>
  );
}

export default App;
