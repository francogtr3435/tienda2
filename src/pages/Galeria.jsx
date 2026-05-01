import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import { CartContext } from '../context/CartContext'

const Galeria = () => {

     const {cargando} = useContext(CartContext) 
  
     return (
    <div>
    <Header/>
       <h1 className='titulo'>Productos</h1>
       {
        <ProductList />
       } 
    <Footer/>
    </div>
  )
}

export default Galeria
