import { useState } from 'react';
import { Link } from "react-router-dom"
import './Navbar.css';
import minhaImagen from '../imagens/logo.png';
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"




const Navbar = () => {

  const [Mobile, setMobile] = useState(false);

  return(
    <>
      <div className="desktopMenu">
           <div className="openLogo">
          <img src={minhaImagen} alt="" />
          <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)} >
            {Mobile ? <ImCross/> : <FaBars/>}
          </button>
        </div>
          <nav className="container ">
            <ul className={Mobile ? "menuLinksMobiles" : "menuLinks"} onClick={() => setMobile(false)}>
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
    </>
  )
}

export default Navbar

