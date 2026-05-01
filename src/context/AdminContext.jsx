import { createContext, useState } from "react"
import { useContext } from "react"
import { CartContext } from "./CartContext"

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {

    const {
        productos,
        agregarProducto,
        actualizarProducto,
        eliminarProducto
    } = useContext(CartContext)

    const [open, setOpen] = useState(false)
    const [openEditor, setOpenEditor] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null)

    return (
        <AdminContext.Provider value={{
            productos,
            agregarProducto,
            actualizarProducto,
            eliminarProducto,
            open,
            setOpen,
            openEditor,
            setOpenEditor,
            seleccionado,
            setSeleccionado
        }}>
            {children}
        </AdminContext.Provider>
    )
}