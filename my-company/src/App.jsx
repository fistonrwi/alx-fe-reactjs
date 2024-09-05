import { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        <nav style={{ padding: '10px' }}>
          <a href="/" style={{ marginRight: '10px' }}>Home</a>
          <a href="/about" style={{ marginRight: '10px' }}>About</a>
          <a href="/services" style={{ marginRight: '10px' }}>Services</a>
          <a href="/contact">Contact</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
