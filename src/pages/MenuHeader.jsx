import { Link } from "react-router-dom"; 
import React from "react"
import './MenuHeader.css'
import minhaImagen from '../imagens/logo.png';

const MenuHeader = () =>{
  return(
    <>
      <div className="container header">
        <img src={minhaImagen} alt="" />
        <ul>
          <li><Link className="header-link" to="/">Home</Link></li>
          <li><Link className="header-link" to="/sobre">Sobre</Link></li>
          <li><Link className="header-link" to="/contato">Contato</Link></li>
        </ul>
      </div>
    </>
  )
}

export default MenuHeader