import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Login from './components/pages/login/Login'
import Cadastro from './components/pages/cadastro/Cadastro'
import Servicos from './components/pages/servicos/Servicos'

import Container from './components/style/container/Container'
import Navbar from './components/pages/navbar/Navbar'
import Footer from './components/pages/footer/Footer'

import CadastroRecrutador from './components/pages/cadastroRecrutador/CadastroRecrutador'
import CadastroCandidato from './components/pages/cadastroCandidato/CadastroCandidato'

import PerfilRecrutador from './components/pages/perfilRecrutador/PerfilRecrutador'
import PerfilCandidato from './components/pages/perfilCandidato/PerfilCandidato'

import Senha from './components/pages/senha/Senha'




export default function App() {
  
  
  return (
    <>
      <Navbar />
      
      <Container >
      
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route customClass="min-height" path="/about" element={<About />} />
          <Route customClass="min-height" path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cadastroCandidato" element={<CadastroCandidato />} />
          <Route path="/cadastroRecrutador" element={<CadastroRecrutador />} />
          <Route path="/perfilRecrutador" element={<PerfilRecrutador />} />
          <Route path="/perfilCandidato" element={<PerfilCandidato />} />
          <Route path="/senha" element={<Senha />} />
      
        </Routes>
      
      </Container>
      
      <Footer />
    </>
  )
}