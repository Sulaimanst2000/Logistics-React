import './App.css';
import React from 'react'
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Services from "./components/Services"
import Shop from "./components/Shop"
import Header_above from './components/Header_above'
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App(){
  return (
    <>
    <BrowserRouter>
    <Header_above/>
    <Navbar/>
    <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/Contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;
