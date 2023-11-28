import { Link } from "react-router-dom"
import './Navbar.css';
import minhaImagen from '../imagens/logo.png'



const Navbar = () => {
  return(
    <div className="menu">
      <nav className="container menu2">
        <Link className="link" to="/Html">Html</Link>
        <Link className="link" to="/Css">Css</Link>
        <Link className="link" to="/Javascript">Javascript</Link>
        <Link className="link" to="/Node">Node</Link>
        <Link className="link" to="/React">React</Link>
        <Link className="link" to="/Vue">Vue</Link>
        <Link className="link" to="/Angular">Angular</Link>
        <Link className="link" to="/Git">Git</Link>
        <Link className="link" to="/Sass">Sass</Link>
        <Link className="link" to="/Less">Less</Link>
        <Link className="link" to="/Webpack">Webpack</Link>
      </nav>
      <div className="menuMobile">
      <div className="openLogo">
        <img src={minhaImagen} alt="" />
        <div className="abrir" id="abrir" >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
        <div className="mobileMenu" id="mobileMenu">
          <div className="fechar" >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <nav className="container">
            <ul className="menuheader">
              <li><Link className="link" to="/Html">Html</Link></li>
              <li><Link className="link" to="/Css">Css</Link></li>
              <li><Link className="link" to="/Javascript">Javascript</Link></li>
              <li><Link className="link" to="/Node">Node</Link></li>
              <li><Link className="link" to="/React">React</Link></li>
              <li><Link className="link" to="/Vue">Vue</Link></li>
              <li><Link className="link" to="/Angular">Angular</Link></li>
              <li><Link className="link" to="/Git">Git</Link></li>
              <li><Link className="link" to="/Sass">Sass</Link></li>
              <li><Link className="link" to="/Less">Less</Link></li>
              <li><Link className="link" to="/Webpack">Webpack</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div> 
  )
}

export default Navbar
