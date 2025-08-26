import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/logo.ico'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutPage from './pages/About/AboutPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageTitle from './utils/Pagetitle';

function App() {
  
  return (
    <>
     <PageTitle title="AgriHub - Home"/>
      <Navbar />
      <Routes>
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
