import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function NavBar({handleNavigation}) {

  return (
    <div className='navbarContainer'>

        <div className='navbarContainer__name'>
            <Link onClick={() => handleNavigation('/')}>Sonnet Lamb</Link>
        </div>
        
        <div className='navbarContainer__links'>
            <p onClick={() => handleNavigation('/')}>Home</p>
            <p onClick={() => handleNavigation('/about')}>About</p>
            <p onClick={() => handleNavigation('/gallery')}>Gallery</p>
            <p onClick={() => handleNavigation('/media', true)}>Reels</p>
            <p onClick={() => handleNavigation('/productions')}>News</p>
            <p onClick={() => handleNavigation('/contact')}>Contact</p>
        </div>
    </div>
  )
}