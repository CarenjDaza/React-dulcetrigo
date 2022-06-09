import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Acercade from './pages/acercade/Acerca';
import Contacto from './pages/contacto/Contacto';
import Personalizados from './pages/Personalizado';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Compras from './pages/Compras';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Personalizados' element={<Personalizados />}></Route>
      <Route path='/Acercade' element={<Acercade />}></Route>
      <Route path='/Contacto' element={<Contacto />}></Route>
      <Route path='/Compras' element={<Compras/>}></Route>
    </Routes>
  </BrowserRouter>
);
