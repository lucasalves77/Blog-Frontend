import { Link } from "react-router-dom"
import '../styles/MenuHeader.css'


const MenuHeader = () => {
  return(
    <>
    <div className="header">
      <ul>
        <li><Link className="header-link" to="/home">Home</Link></li>
        <li><Link className="header-link">Sobre</Link></li>
        <li><Link className="header-link">Contato</Link></li>
      </ul>
    </div>
    </>
  )
}

export default MenuHeader