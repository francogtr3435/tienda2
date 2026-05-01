import React, { useContext } from "react"
import FormularioProoductos from "./FormularioProoductos"
import FormularioEdicion from "./FormularioEdicion"
import { AdminContext } from "../context/AdminContext"
import Footer from "./estaticos/Footer"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import './StyleAdmin.css'

const Admin = () => {

    const navigate = useNavigate()
    const { logout } = useAuth()

    const {
        productos,
        loading,
        open,
        setOpen,
        openEditor,
        seleccionado,
        setSeleccionado,
        setOpenEditor,
        agregarProducto,
        actualizarProducto,
        eliminarProducto,
    } = useContext(AdminContext)

    return (
        <div className="adminContainer">

            <nav className="adminNav">
                <h2>Panel Admin</h2>

                <button
                    className="logoutBtn"
                    onClick={() => {
                        logout()
                    }}
                >
                    Salir
                </button>
            </nav>

            <h1 className="titleAdmin">Productos</h1>

            {loading ? (
                <p className="loading">Cargando...</p>
            ) : (
                <div className="gridProducts">

                    {productos?.length > 0 ? (
                        productos.map((product) => (
                            <div key={product.id} className="cardProduct">

                                <img
                                    src={product.imagen || "https://via.placeholder.com/200"}
                                    alt={product.nombre}
                                    className="productImg"
                                />

                                <h3>{product.nombre}</h3>
                                <p>${product.precio}</p>

                                <div className="actions">

                                    <button
                                        onClick={() => {
                                            setOpenEditor(true)
                                            setSeleccionado(product)
                                        }}
                                    >
                                        Editar
                                    </button>

                                    <button onClick={() => eliminarProducto(product.id)}>
                                        Eliminar
                                    </button>

                                </div>

                            </div>
                        ))
                    ) : (
                        <p>No hay productos</p>
                    )}

                </div>
            )}

            <button className="addBtn" onClick={() => setOpen(true)}>
                Agregar Producto
            </button>

            {open && (
                <FormularioProoductos onAgregar={agregarProducto} />
            )}

            {openEditor && (
                <FormularioEdicion
                    productoSeleccionado={seleccionado}
                    onActualizar={actualizarProducto}
                />
            )}

            <Footer />

        </div>
    )
}

export default Admin