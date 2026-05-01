import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './styleLogin.css'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login = () => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        error,
        clearErrors,
        isAuthenticated,
        user
    } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        setEmail('')
        setPassword('')
        clearErrors()
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        
        // ✅ Verificar si ya está logueado
        if (isAuthenticated) {
            toast.info("🔔 Ya estás conectado")
            const role = user?.role?.trim().toLowerCase()
            navigate(role === "admin" ? "/admin" : "/")
            return
        }

        const loggedInUser = await handleSubmit()

        if (!loggedInUser) return

        toast.success("✅ Sesión iniciada correctamente")

        const role = loggedInUser.role?.trim().toLowerCase()

        setTimeout(() => {
            if (role === "admin") {
                navigate("/admin")
            } else {
                navigate("/")
            }
        }, 0)
    }

    return (
        <>
            <Header />

            <div className="login">
                <h1 className="tlogin">Inicio de sesión</h1>

                <form className="formlogin" onSubmit={handleLogin}>

                    <div className="group">
                        <input
                            className="inputlogin"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error.email && <span className="error">{error.email}</span>}
                    </div>

                    <div className="group">
                        <input
                            className="inputlogin"
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error.password && <span className="error">{error.password}</span>}
                    </div>

                    <button className="btlogin" type="submit">
                        Iniciar sesión
                    </button>

                    <button
                        type="button"
                        className="btlres"
                        onClick={() => navigate("/registro")}
                    >
                        Registrarse
                    </button>

                </form>
            </div>

            <Footer />
        </>
    )
}

export default Login