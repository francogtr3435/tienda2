import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function RutaProtegida({ children, adminOnly = false }) {
    
    const { isAuthenticated, user } = useAuth() 

    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    
    if (adminOnly) {
        const role = (user?.role || "").trim().toLowerCase()
        if (role !== "admin") {
            return <Navigate to="/" replace />
        }
    }

    return children
}

export default RutaProtegida