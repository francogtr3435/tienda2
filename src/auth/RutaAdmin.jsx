import React from 'react'
import { Navigate } from 'react-router-dom'

function RutaAdmin({ children }) {

  const user = JSON.parse(localStorage.getItem("user") || "null")

  if (!user) {
    return <Navigate to="/login" replace />
  }

  const role = (user.role || "").trim().toLowerCase()

  return children
}

export default RutaAdmin