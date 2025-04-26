import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <section>
        <Link to="/">Home</Link>
        <Link to="Sobre">Sobre</Link>
        <Link to="Funcionalidades">Funcionalidades</Link>
        <Link to="Avaliacao">Avaliação</Link>
      </section>

    </>
  )
}

export default Header
