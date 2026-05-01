import React, { useContext } from 'react';
import './styleCart.css';
import { CartContext } from '../context/CartContext';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext'  // Ruta relativa correcta

const Cart = ({ isOpen, onClose }) => {


  const { isAuthenticated, cart, handleDeleteFromCart, clearCart, finish } = useContext(CartContext)
  const navigate = useNavigate();

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
        <button onClick={onClose} className='close-button'>x</button>
      </div>
      <div className='cart-content'>
        {cart.length === 0 ? (<p style={{ color: 'red' }}>vacio</p>)
          : (<><ul className='cart-item'>
            {cart.map((item, index) => (

              <li key={item.id} style={{ color: 'black' }}>
                {item.nombre} - {item.precio} -{item.cantidad}
                <button onClick={() => handleDeleteFromCart(item)}><i className="fa-solid fa-trash"></i>
                </button>
              </li>
              
            ))}
          </ul>
            <div className='cart-footer'>
              <p style={{ color: 'blue' }}>Total: ${cart.reduce
                ((total, item) => total + (item.precio * item.cantidad), 0)}</p>

              <button onClick={() => {
                if (!isAuthenticated) {
                  alert('Debes iniciar sesión para comprar');
                  navigate('/login');
                  return;
                } finish();
              }} style={{ color: 'black' }} className='btnCheckout'>
                Finalizar Compra
              </button>

              <button onClick={clearCart} style={{ color: 'black' }} >Vaciar Carrito</button>
            </div>
          </>)}
      </div>
    </div>
  )
}
export default Cart;



