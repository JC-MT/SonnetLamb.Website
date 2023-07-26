import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import NavBar from './components/Navbar'
import Home from './components/Home'

export default function App() {

  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <main>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <div className='test'></div>

      </main>
    </>
  )
}