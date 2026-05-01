import React, { useState, useContext } from 'react';
import './styleProductos.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useNavigate } from "react-router-dom";

const Product = ({ producto }) => {

    const { handleAddToCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);  
    const navigate = useNavigate();

    const increase = () => {
        if (cantidad < producto.stock) {
            setCantidad(prev => prev + 1)
        }
    }

    const decrease = () => {
        setCantidad(prev => (prev > 1 ? prev - 1 : prev))
    }

    const handleAgregar = () => {
        handleAddToCart({ ...producto, cantidad })

        setCantidad(1)
    }

    return (
        <section className='card'>
            <div className='imagenContainer'>
                <img src={producto.imagen} alt={producto.nombre} className='imagen' />
            </div>
            <h3 className='nombre'>{producto.nombre}</h3>
            <p className='precio' >${producto.precio}</p>
            <p className='stock'>Stock: {producto.stock}</p>

            <div className='cantidadContainer'>
                <button 
                    className='qtyButton' 
                    onClick={decrease}
                    disabled={cantidad <= 1}
                >
                    -
                </button>
                <span>{cantidad}</span>
                <button 
                    className='qtyButton' 
                    onClick={increase}
                    disabled={cantidad >= producto.stock}
                >
                    +
                </button>
            </div>
            
            <button onClick={handleAgregar} disabled={producto.stock <= 0}>
                {producto.stock > 0 ? 'Agregar' : 'Sin Stock'}
            </button>
            
            <Link to={`/productos/${producto.id}`}> ver mas </Link>
        </section>
    )
}
export default Product;