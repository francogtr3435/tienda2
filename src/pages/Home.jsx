import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './StyleHome.css'
import { CartContext } from '../context/CartContext'

const Home = () => {

  const {
  cargando,
  productosDestacados = [],
  productosOfertas = [],
  productosGratis = [],
  productosInteres = [],
} = useContext(CartContext)

  return (
    <>
      <Header />

      <main className="homeContainer">

        <section className="homeTitle">
          <h1>TechStore</h1>
          <p>Ofertas en tecnología + 12 cuotas sin interés</p>
        </section>

        {cargando ? (
          <p>Cargando...</p>
        ) : (
          <>
            <h2>Destacados</h2>

            <div className="productGrid">
              {productosDestacados.map(p => (
                <div key={p.id} className="productCard">
                  <img src={p.imagen} alt={p.nombre} className="productImg" />
                  <h4>{p.nombre}</h4>
                  <p>${p.precio}</p>
                </div>
              ))}
            </div>

            <h2>Ofertas</h2>

            <div className="productGrid">
              {productosOfertas.map(p => (
                <div key={p.id} className="productCard offer">
                  <img src={p.imagen} alt={p.nombre} className="productImg" />
                  <h4>{p.nombre}</h4>
                  <p>${p.precio}</p>
                  <span>OFERTA</span>
                </div>
              ))}
            </div>

            <h2>Envio Gratis</h2>

            <div className="productGrid">
              {productosGratis.map(p => (
                <div key={p.id} className="productCard offer">
                  <img src={p.imagen} alt={p.nombre} className="productImg" />
                  <h4>{p.nombre}</h4>
                  <p>${p.precio}</p>
                  <span>A TOODO EL PAIS</span>
                </div>
              ))}
            </div>

            <h2>12 Cuotas</h2>

            <div className="productGrid">
              {productosInteres.map(p => (
                <div key={p.id} className="productCard offer">
                  <img src={p.imagen} alt={p.nombre} className="productImg" />
                  <h4>{p.nombre}</h4>
                  <p>${p.precio}</p>
                  <span>SIN INTERES</span>
                </div>
              ))}
            </div>
          </>         
        )}
      </main>

      <Footer />
    </>
  )
}

export default Home