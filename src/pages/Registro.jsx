import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './StyleLogin.css'
import { useNavigate } from "react-router-dom"


const Registro = () => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
    error,
    clearErrors
  } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    setEmail('')
    setPassword('')
    clearErrors()
  }, [])

  return (
    <>
      <Header />

      <div className="login">
        <h1 className="tlogin">Registro</h1>

        <form
          className="formlogin"
          onSubmit={async (e) => {
            e.preventDefault()

            const user = await handleRegister()

            if (!user) return

            navigate("/")
          }}
        >

          <div className="group">
            <label>Email</label>
            <input
              className="inputlogin"
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <span className="error">{error.email}</span>}
          </div>

          <div className="group">
            <label>Contraseña</label>
            <input
              className="inputlogin"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <span className="error">{error.password}</span>}
          </div>

          <button type="submit" className="btlogin">
            Registrarse
          </button>

          <button
            type="button"
            className="btlres"
            onClick={() => navigate("/")}
          >
            Volver al inicio
          </button>

        </form>
      </div>

      <Footer />
    </>
  )
}

export default Registro