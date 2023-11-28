import { Link } from "react-router-dom"


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
    </div> 
  )
}

export default Navbar
