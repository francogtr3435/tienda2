import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './StyleEstaticos.css'
import Cart from '../Cart'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'

const Header = () => {

  const [isCartOpen, setCartOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()  
  const navigate = useNavigate()

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate("/perfil")
    } else {
      navigate("/login")
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <div
            className="collapse navbar-nav ms-auto mb-2 mb-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink className="link" to="/">Inicio</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="link" to="/acercade">Nosotros</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="link" to="/productos">Galería de productos</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="link" to="/contacto">Contacto</NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="btnCart link"
                  onClick={() => setCartOpen(true)}
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                  <FaShoppingCart color="red" />
                </button>
                <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
              </li>

              
              <li className="nav-item">
                <NavLink to="/login" className="link">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </NavLink>
              </li>

             
              <li className="nav-item">
                <button
                  onClick={handleUserClick}
                  className="link"
                  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                  title={isAuthenticated ? `Perfil de ${user?.email}` : 'Iniciar sesión'}
                >
                  <i className="fa-solid fa-user-tie"></i>
                </button>
              </li>

              <li className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
                {isAuthenticated ? (
                  <span
                    style={{ color: "green", marginLeft: "10px", cursor: 'pointer' }}
                    title={`Sesión activa: ${user?.email}`}
                    onClick={logout}
                  >
                    🟢
                  </span>
                ) : (
                  <span style={{ color: "red", marginLeft: "10px" }}>
                    🔴
                  </span>
                )}
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
