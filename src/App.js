import Index from './pages/index';
import Detalle from './pages/detalle';
import Agregar from './pages/agregar';
import Carrito from './pages/carrito';
import Pedido from './pages/pedido';
import Perfil from './pages/perfil';
import Login from './pages/login';
import Registro from './pages/registro';
import Productos from './pages/productos';
import Contacto from './pages/contacto';
import Nosotros from './pages/nosotros';
import Productosadmin from './pages/productosadmin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Context from './context/context'
import { useState } from "react"
import React from "react";


function App() {
  const [usuario, setUsuario] = useState(null)

  return (
    <Context.Provider value={{ usuario, setUsuario }}>
    
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/detalle' element={<Detalle />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/agregar' element={<Agregar />} />
          <Route path='/agregar/:id/edit' element={<Agregar />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/pedido' element={<Pedido />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/registro:id/edit' element={<Registro />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/productosadmin' element={<Productosadmin />} />
        </Routes>
      </Router>

    
    </Context.Provider>
  );
}

export default App;
