import React, { useState } from 'react'
import './StyleFormularios.css'

const FormularioProoductos = ({ onAgregar }) => {
  const [producto, setProctos] = useState({
    nombre: '',
    precio: '',
    stock: '',
    imagen: '',
    categoria: '',
    descripcion: ''
  })
  const [errores, setErrores] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    setProctos({ ...producto, [name]: value })
  }

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }
    if (!producto.precio || Number(producto.precio) <= 0) {
      nuevosErrores.precio = 'El precio debe ser mayor a 0.';
    }
    if (!producto.categoria.trim() || producto.categoria.length < 5) {
      nuevosErrores.categoria = 'La categoría debe tener al menos 5 caracteres.';
    }
    if (!producto.descripcion || producto.descripcion.length < 10) {
      nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
    }
    if (producto.stock === '' || Number(producto.stock) < 0) {
      nuevosErrores.stock = 'El stock debe ser mayor o igual a 0.';
    }
    if (!producto.imagen.trim()) {
      nuevosErrores.imagen = 'La imagen es obligatoria.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validarFormulario()) {
      return
    }
    onAgregar(producto)
    setProctos({
      nombre: '',
      precio: '',
      stock: '',
      imagen: '',
      categoria: '',
      descripcion: ''
    })
  }

  return (
    <form className="form-producto" onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>


      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          required />
        {errores.nombre && <p style={{ color: "red" }}>
          {errores.nombre}</p>}
      </div>


      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          required
          min="0" />
        {errores.precio &&
          <p style={{ color: "red" }}>{errores.precio}</p>
        }
      </div>


      <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={producto.stock || ''}
          onChange={handleChange}
          required
          min="0"
        />
        {errores.stock &&
          <p style={{ color: "red" }}>{errores.stock}</p>
        }
      </div>


      <div>
        <label>Imagen url:</label>
        <input
          type="text"
          name="imagen"
          value={producto.imagen || ''}
          onChange={handleChange}
          required />
        {errores.imagen &&
          <p style={{ color: "red" }}>{errores.imagen}</p>
        }
      </div>


      <div>
        <label>Categoria:</label>
        <input
          type="text"
          name="categoria"
          value={producto.categoria || ''}
          onChange={handleChange}
          required />
        {errores.categoria &&
          <p style={{ color: "red" }}>{errores.categoria}</p>
        }
      </div>

      <div>
        <label>Descripción:</label>
        <input
          type="text"
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          required />
        {errores.descripcion &&
          <p style={{ color: "red" }}>{errores.descripcion}</p>
        }
      </div>


      <button type="submit">Agregar Producto</button>
    </form>
  )
}

export default FormularioProoductos


