import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar"
import Inicio from './components/Inicio';
import minhaImagen from './imagens/logo.png';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import MenuHeader from './pages/MenuHeader'

function App() {
  return (
    
    <div className="App">
      <Inicio/>
      <div className="container logo">
        <img src={minhaImagen} alt="" />
        <MenuHeader/>
      </div>     
      <Navbar/>
      <Outlet/>
      <div className='container'>
        <footer className=' meuFooter'>
        <p>Todos direitos reservados</p>
        <ul className='icons'>
          <li><a href="https://github.com/lucasalves77"><TbBrandGithubFilled /></a></li>
          <li><a href=""><RiInstagramFill /></a></li>
          <li><a href="linkedin.com/in/lucas-alvesz"><FaLinkedinIn /></a></li>
          <li><a href=""><FaTwitter /></a></li>
        </ul>
      </footer>
      </div>
      
    </div>
  );
}

export default App;

