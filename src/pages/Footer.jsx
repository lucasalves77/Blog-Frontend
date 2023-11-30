import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn }from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import './Footer.css'

const Footer = () => {

  return(
    <>
      <div className=' meuFooter'>
        <p>Todos direitos reservados</p>
        <ul className='icons'>
          <li><a href="https://github.com/lucasalves77"><TbBrandGithubFilled /></a></li>
          <li><a href=""><RiInstagramFill /></a></li>
          <li><a href="linkedin.com/in/lucas-alvesz"><FaLinkedinIn /></a></li>
          <li><a href=""><FaTwitter /></a></li>
        </ul>
      </div>
    </>
  )
}

export default Footer
