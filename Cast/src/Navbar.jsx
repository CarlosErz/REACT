import React, { useState } from 'react'
import inicio from "/src/assets/inicio.svg"
import servicios from "/src/assets/Servicios.svg"
import sobreNosotros from "/src/assets/Sobre nosotros.svg"
import productos from "/src/assets/Productos.svg"
import "/src/assets/Servicios.svg"

export function Navbar() {

  const [active, setActive] = useState(null)
  const handleClick = (index) => {
    setActive(index)
  }

  return (
    <nav className="Nav">
      <a href="#Servicios" className={`Nav-item ${active === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
        <img className="Nav-icon" src={inicio} alt="" />
        <span>INICIO</span>
      </a>
      <a href="#Servicios" className={`Nav-item ${active === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
        <img className="Nav-icon" src={servicios} alt="" />
        <span>SERVICIOS</span>
      </a>
      <a href="#Sobre nosotros" className={`Nav-item ${active === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
        <img className="Nav-icon" src={sobreNosotros} alt="" />
        <span>NOSOTROS</span>
      </a>
      <a href="#Servicios" className={`Nav-item ${active === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
        <img className="Nav-icon" src={productos} alt="" />
        <span>PRODUCTOS</span>
      </a>
    </nav>
  )
}