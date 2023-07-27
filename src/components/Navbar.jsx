import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function NavBar() {

  return (
    <div className='navbarContainer'>

        <div className='navbarContainer__name'>
            <Link to={'/'}>Sonnet Lamb</Link>
        </div>
        <div className='navbarContainer__links'>
            <Link to={'/'}><p>Home</p></Link>
            <Link to={'/about'}><p>About</p></Link>
            <Link to={'/'}><p>Gallery</p></Link>
            <Link to={'/'}><p>Reels</p></Link>
            <Link to={'/'}><p>News</p></Link>
            <Link to={'/'}><p>Contact</p></Link>
        </div>
    </div>
  )
}