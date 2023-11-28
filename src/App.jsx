import './App.css';

import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar"

function App() {
  return (
    
    <div className="App">
      <div className='logo'>
        <h2 className='logoF'>F</h2>
        <h3 className='logoE'>E</h3>
      </div>
      <Navbar/>
      <Outlet/>
      <footer className='container'>
        <p>Todos direitos reservados</p>
        <ul className='icons'>
          <li><a href="https://github.com/lucasalves77"><i class="fa-brands fa-square-github"></i></a></li>
          <li><a href=""><i class="fa-brands fa-square-instagram"></i></a></li>
          <li><a href="linkedin.com/in/lucas-alvesz"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a href=""><i class="fa-brands fa-square-twitter"></i></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

