import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const AcercaDe = () => {
  return (
    <>
      <Header />

      <div style={{
        padding: '40px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>

        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          Sobre Nosotros
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>

          <div style={{
            background: '#f5f5f5',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <img
              src=""
              alt="empresa"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3>Quiénes somos</h3>
            <p>
              Somos una tienda tecnológica enfocada en calidad y precio.
            </p>
          </div>

          <div style={{
            background: '#f5f5f5',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <img
              src=""
              alt="objetivo"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3>Nuestro objetivo</h3>
            <p>
              Brindar una experiencia de compra rápida, simple y segura.
            </p>
          </div>

          <div style={{
            background: '#f5f5f5',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <img
              src=""
              alt="soporte"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3>Soporte</h3>
            <p>
              Acompañamos a nuestros clientes antes y después de la compra.
            </p>
          </div>

        </div>

        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '20px',
          background: '#eaeaea',
          borderRadius: '10px'
        }}>
          <h2>Más información</h2>
          <p>
            Trabajamos todos los días para mejorar nuestra plataforma
            y ofrecer los mejores productos tecnológicos del mercado.
          </p>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default AcercaDe