import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({})

    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("user")
        return stored ? JSON.parse(stored) : null
    })

    const navigate = useNavigate()
    const isAuthenticated = !!user

    const API_USERS = "https://69f25e1cb15130b97352dcf6.mockapi.io/api/user/usuarios"

    const clearErrors = () => setError({})

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            localStorage.removeItem("user")
        }
    }, [user])

    const handleSubmit = async () => {
        if (isAuthenticated) {
            toast.info("Ya tienes una sesión activa")
            return user
        }

        try {
            const res = await fetch(API_USERS)
            const users = await res.json()

            const foundUser = users.find(
                (u) =>
                    u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
                    u.password === password
            )

            if (!foundUser) {
                setError({ email: "Credenciales inválidas" })
                return null
            }

            const cleanUser = {
                ...foundUser,
                role: foundUser.role?.trim().toLowerCase()
            }

            setUser(cleanUser)
            return cleanUser

        } catch (err) {
            setError({ email: "Error al iniciar sesión" })
            return null
        }
    }

    // REGISTER
    const handleRegister = async () => {
        try {
            const res = await fetch(API_USERS)
            const users = await res.json()

            const existing = users.find(
                (u) => u.email.trim().toLowerCase() === email.trim().toLowerCase()
            )

            if (existing) {
                setError({ email: "El usuario ya existe" })
                return null
            }

            const createRes = await fetch(API_USERS, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email.trim().toLowerCase(),
                    password,
                    role: "cliente"
                })
            })

            const newUser = await createRes.json()

            const cleanUser = {
                ...newUser,
                role: newUser.role?.trim().toLowerCase()
            }

            setUser(cleanUser)
            toast.success("¡Cuenta creada correctamente! Bienvenido/a 🎉")

            return cleanUser

        } catch (err) {
            setError({ email: "Error al registrar usuario" })
            return null
        }
    }

    // LOGOUT
    const logout = () => {
        setUser(null)
        toast.info("Sesión cerrada correctamente")
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{
            email,
            setEmail,
            password,
            setPassword,
            error,
            clearErrors,
            handleSubmit,
            handleRegister,
            logout,
            user,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)