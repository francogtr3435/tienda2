import { createContext, useState, useEffect, useContext } from "react"
import { toast } from "react-toastify"
import { useAuth } from "./AuthContext"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const { isAuthenticated } = useAuth()

    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [busqueda, setBusqueda] = useState("")

    const apiUrl = "https://69652ef5e8ce952ce1f47079.mockapi.io/PRODUCTOS-ECOMMERCE/PRODUCTOS"

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setProductos(data)
                setCargando(false)
            })
            .catch(() => setCargando(false))
    }, [])

    const handleAddToCart = (product) => {
        setCart(prev => {
            const existe = prev.find(item => item.id === product.id)
            
            if (existe) {
                const nuevaCantidad = existe.cantidad + product.cantidad
                
                // ✅ Validación de stock
                if (nuevaCantidad > product.stock) {
                    toast.error(`⚠️ Solo hay ${product.stock} unidades disponibles`)
                    return prev
                }
                
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, cantidad: nuevaCantidad }
                        : item
                )
            }
            
            // ✅ Validación para producto nuevo en carrito
            if (product.cantidad > product.stock) {
                toast.error(`⚠️ Solo hay ${product.stock} unidades disponibles`)
                return prev
            }
            
            return [...prev, product]
        })
    }

    const handleDeleteFromCart = (product) => {
        setCart(prev => prev.filter(item => item.id !== product.id))
    }

    const clearCart = () => setCart([])

    const finish = () => {
        if (!isAuthenticated) {
            toast.error("Debes iniciar sesión para comprar")
            return
        }
        setCart([])
        toast.success("¡Compra finalizada con éxito! 🎉")
    }

    const agregarProducto = async (producto) => {
        try {
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto)
            })
            const data = await res.json()
            setProductos(prev => [...prev, data])
            toast.success("✅ Producto agregado correctamente")
        } catch {
            toast.error("❌ Error al agregar el producto")
        }
    }

    const actualizarProducto = async (producto) => {
        try {
            await fetch(`${apiUrl}/${producto.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto)
            })
            setProductos(prev =>
                prev.map(p => p.id === producto.id ? producto : p)
            )
            toast.success("✅ Producto actualizado correctamente")
        } catch {
            toast.error("❌ Error al actualizar el producto")
        }
    }

    const eliminarProducto = async (id) => {
        try {
            await fetch(`${apiUrl}/${id}`, { method: "DELETE" })
            setProductos(prev => prev.filter(p => p.id !== id))
            toast.success("✅ Producto eliminado")
        } catch {
            toast.error("❌ Error al eliminar el producto")
        }
    }

    const productosFiltrados = productos.filter(p =>
        (p?.nombre ?? "").toLowerCase().includes(busqueda.toLowerCase())
    )

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)

    const productosDestacados = shuffle(productos).slice(0, 4)
    const productosOfertas = shuffle(productos).slice(0, 4)
    const productosGratis = shuffle(productos).slice(0, 4)
    const productosInteres = shuffle(productos).slice(0, 4)

    return (
        <CartContext.Provider value={{
            cart,
            productos,
            cargando,
            busqueda,
            setBusqueda,
            isAuthenticated,
            handleAddToCart,
            handleDeleteFromCart,
            clearCart,
            finish,
            productosFiltrados,
            productosDestacados,
            productosOfertas,
            productosGratis,
            productosInteres,
            agregarProducto,
            actualizarProducto,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}