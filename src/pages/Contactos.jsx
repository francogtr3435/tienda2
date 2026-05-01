import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './styleContactos.css'
import { toast } from 'react-toastify'

const Contactos = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Mensaje enviado")
    e.target.reset()
  }

  return (
    <>
      <Header />
      <div className="contacto">
        <h1 className="titulo">Contacto</h1>

        <form className="formulario" onSubmit={handleSubmit}>
          <div className="group">
            <label>Nombre</label>
            <input className="inputcontacto" type="text" name="nombre" placeholder="Ingresa tu nombre y apellido" required />
          </div>

          <div className="group">
            <label>Email</label>
            <input className="inputcontacto" type="email" name="email" placeholder="Ingresa tu Email" required />
          </div>

          <div className="group">
            <label>Mensaje</label>
            <textarea name="mensaje" placeholder="Ingresa tu consulta" required></textarea>
          </div>

          <button className="btcont" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contactos