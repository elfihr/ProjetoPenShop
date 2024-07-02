import React,{ useState} from 'react'//useState for display screen when shrink
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import reorder from '../assets/reorderWhite.png'
import penLogo from '../assets/PenFihrShop.png'

const Navbar = () => {
  
  const [openLinks,setOpenLinks] = useState(false)//when screen shrink
  const toggleIcon = () => {
    setOpenLinks(!openLinks)
  }

  return (
    <div className='navbar'>
      <div className='navbar-logo' id={openLinks ? "open" : "close"}>
        <img src={penLogo} alt='A pen logo from the site'/>
        
        <div className='hiddenLinks'>
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/sobre"}>Sobre</Link>
          <Link to={"/contato"}>Contato</Link>
        </div>
      </div>
      <div className='navbar-menu'>
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/sobre"}>Sobre</Link>
        <Link to={"/contato"}>Contato</Link>
        <button onClick={toggleIcon}>
           <img className='reoderIcon' src={reorder}></img>
        </button>
       
      </div>
    </div>
  )
}

export default Navbar