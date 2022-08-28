import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Navbar from './components/pages/navbar/Navbar'
import Footer from './components/pages/footer/Footer'
import Login from './components/pages/login/Login'
import Cadastro from './components/pages/cadastro/Cadastro'
import Servicos from './components/pages/servicos/Servicos'

import Container from './components/container/Container'


export default function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastre-se</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contact">Contact</Link>

      </div>

      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}