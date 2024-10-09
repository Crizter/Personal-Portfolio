import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router'
import About from './components/About' 
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ModelViewer from './components/ModelViewer'
import Projects from './components/Projects'


function App() {

  const location = useLocation() ; 
  return (
    <>
      {/* Conditionally render Navbar */}
      {location.pathname !== '/about'  && <Navbar />}
      
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/models" element={<ModelViewer />} />
      </Routes>
    </>
  );
}

export default App
