import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Login from './components/pages/login/Login'
import Cadastro from './components/pages/cadastro/Cadastro'
import Servicos from './components/pages/servicos/Servicos'

import Container from './components/style/container/Container'
import Navbar from './components/pages/navbar/Navbar'
import Footer from './components/pages/footer/Footer'


export default function App() {
  return (
    <>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}