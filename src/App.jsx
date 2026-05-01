import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe'
import Contactos from './pages/Contactos'
import Galeria from './pages/Galeria'
import NotFound from './pages/NotFound'
import DetallesProductos from './components/DetallesProductos';
import Admin from './components/Admin';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Perfil from './pages/Perfil';
import RutasProtegidas from './auth/RutasProtegidas'; 

function App() {

    return (
        <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/acercade' element={<AcercaDe />} />

            <Route path='/productos' element={<Galeria />} />

            <Route path='/contacto' element={<Contactos />} />

            <Route path='/productos/:id' element={<DetallesProductos />} />

            <Route path='*' element={<NotFound />} />

            <Route path="/admin" element={
                <RutasProtegidas adminOnly={true}>
                    <Admin />
                </RutasProtegidas>
            } />

            <Route path="/perfil" element={
                <RutasProtegidas>
                    <Perfil />
                </RutasProtegidas>
            } />

            <Route path='/login' element={<Login />} />

            <Route path='/registro' element={<Registro />} />

        </Routes>
    )
}

export default App