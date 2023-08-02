import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Components & Pages
import NavBar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Productions from './Pages/Productions'
import Media from './Pages/Media'
import Gallery from './Pages/Gallery'

export default function App() {
  const [ navigationSwitch , setNavigationSwitch ] = useState({route: '/', active: false})
  const navigate = useNavigate()

  function handleRefrech(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  function handleNavigation(route, media){
    if(navigationSwitch.route !== route){
      setNavigationSwitch({...navigationSwitch, active: true})
      if(media){

        setTimeout(() => navigate(`${route}`), 500)
        setTimeout(() => setNavigationSwitch({route: route, active: false}), 1500)
  
      } else {
  
        setTimeout(() => navigate(`${route}`), 500)
        setTimeout(() => setNavigationSwitch({route: route, active: false}), 500)
      }
    }
  }

  return (
    <>
      <nav>
        <NavBar handleNavigation={handleNavigation}/>
      </nav>
      <main className={ navigationSwitch.active ? 'decreaseOpacity' : 'increaseOpacity'} onLoad={handleRefrech}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/media" element={<Media/>} />
          <Route path="/productions" element={<Productions/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </main>
    </>
  )
}