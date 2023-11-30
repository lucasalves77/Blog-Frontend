import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home"
import Sobre from "./routes/Sobre"
import Contato from "./routes/Contato"
import Html from "./routes/Html";
import Css from "./routes/Css";
import Javascript from "./routes/Javascript";
import Node from "./routes/Node";
import Reactjs from "./routes/React";
import Vue from "./routes/Vue";
import Angular from "./routes/Angular";
import Git from "./routes/Git";
import Sass from "./routes/Sass";
import Less from "./routes/Less";
import Webpack from "./routes/Webpack";
import Navbar from './components/Navbar';
import Inicio from './components/Inicio'
import MenuHeader from './pages/MenuHeader';
import Footer from './pages/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
      <Inicio/>
      <MenuHeader/>
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/html" element={<Html/>} />
        <Route path="/css" element={<Css/>} />
        <Route path="/javascript" element={<Javascript/>} />
        <Route path="/node" element={<Node/>} />
        <Route path="/reactjs" element={<Reactjs/>} />
        <Route path="/vue" element={<Vue/>} />
        <Route path="/angular" element={<Angular/>} />
        <Route path="/git" element={<Git/>} />
        <Route path="/sass" element={<Sass/>} />
        <Route path="/less" element={<Less/>} />
        <Route path="/webpack" element={<Webpack/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
