import './App.css';
import MiLista from './components/MiLista';
import Header from './header/Header';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <h1> Hola mundo</h1>
        <h2> Este es mi primer componente React</h2>
        <div className='parrafo'>
          <p> Bienvenido a mi aplicación creada con React</p>
          <MiLista titulo="Amigos" nombre1="Alberto" nombre2="Juan" nombre3="Pepa"/>
          <br/>
          <MiLista titulo="Clientes" nombre1="Ana" nombre2="Delfina" nombre3="Fermin"/>
          <br/>
          <MiLista titulo="Familiares" nombre1="Adela" nombre2="Juan" nombre3="Jose"/>
          <br/>
        </div>
        <Footer/>
    </div>
  );
};

export default App;
