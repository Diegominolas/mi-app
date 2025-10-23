import './App.css';
import MiLista from '../components/MiLista';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function App() {
  return (
    <div id="App">
        <Header/>
        <h1> Mi aplicación</h1>
        <div id='parrafo'>
          <p> Esta aplicación muestra el contenido almacenado de mi App.</p>
          <MiLista/>
        </div>
        <Footer/>
    </div>
  );
};

export default App;
