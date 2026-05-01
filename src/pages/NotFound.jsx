import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1> error</h1>
      <button><Link to='/'>volver</Link></button>
    </div>
  )
}

export default NotFound
