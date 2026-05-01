import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Perfil = () => {

  const { user, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
    return null
  }

  return (
    <>
      <Header />

      <div style={{
        maxWidth: '500px',
        margin: '60px auto',
        padding: '2rem',
        border: '1px solid #eee',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        background: '#fff',
        textAlign: 'center'
      }}>

        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</div>

        <h1 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: '#333' }}>
          Mi cuenta
        </h1>

        <p style={{ color: '#555', marginBottom: '0.5rem' }}>
          <strong>Email:</strong> {user.email}
        </p>

        <p style={{ color: '#555', marginBottom: '1.5rem' }}>
          <strong>Rol:</strong> {user.role === 'admin' ? '🔧 Administrador' : '🛒 Cliente'}
        </p>

        <button
          onClick={logout}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.6rem',
            background: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Cerrar sesión
        </button>

      </div>

      <Footer />
    </>
  )
}

export default Perfil
