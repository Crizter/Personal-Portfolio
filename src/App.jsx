import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ModelViewer from './components/ModelViewer'
import Projects from './components/Projects'
import Preloader from './components/Preloader'
import './styles/Navbar.css'


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation() ; 

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />
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
