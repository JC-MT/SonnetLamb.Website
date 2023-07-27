import { useState, useLayoutEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import NavBar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './Pages/About'

export default function App() {
  const [scrollTop, setScrollTop] = useState(0);

  function handleScroll(){
    setScrollTop(window.scrollY);
  };

  useLayoutEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
    <header>
    <div 
      className='background'
      style={{ backgroundPositionY: `${(scrollTop - 20) * .85}px`}}
      ></div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </header>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <Routes>
          <Route path="/about" element={<About/>} />
          {/* <Route path="/gallery" element={<Gallery/>} />
          <Route path="/media" element={<Media/>} />
          <Route path="/productions" element={<Productions/>} />
          <Route path="/contact" element={<Contact/>} /> */}
        </Routes>
      </main>
        <div className='homeContainer__contact'>
          <img className='homeContainer__contact__img' src='https://static.wixstatic.com/media/15312d_87e0a00d25c44421845f8a6a2a0cc6cb~mv2_d_2240_3360_s_2.jpeg/v1/fill/w_1396,h_760,fp_0.51_0.52,q_85,usm_0.66_1.00_0.01,enc_auto/15312d_87e0a00d25c44421845f8a6a2a0cc6cb~mv2_d_2240_3360_s_2.jpeg'/>
          <div className='homeContainer__contact__info'>
            <h2>CONTACT ME</h2>
            <a href="mailto:sayhello@sonnetlamb.com">sayhello@sonnetlamb.com</a>
            <div className='homeContainer__contact__info__socialmedia'>
              <a href='https://www.facebook.com/sonnet.lamb' target="_blank" rel="noreferrer" ><img width={'26px'} height={'26px'} src='https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Facebook.png'/></a>
              <a href='https://www.instagram.com/sonnetlamb/?hl=en' target="_blank" rel="noreferrer" ><img width={'26px'} height={'26px'} src='https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Instagram.png'/></a>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}