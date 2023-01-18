
export function Navbar() {
  return (
    <nav className="Nav">
      <ul className="Nav-lis">
        <li className="Nav-item">
          <a href="#"><img src="src/assets/inicio.svg" alt="" className="Nav-icon" />
            INICIO
          </a>
        </li>
        <li className="Nav-item">
          <a href="#Servicios" ><img src="src/assets/Servicios.svg" alt="" className="Nav-icon" />
            SERVICIOS
          </a>
        </li>
        <li className="Nav-item">
          <a href="#Sobre nosotros" ><img src="src/assets/Sobre nosotros.svg" alt="" className="Nav-icon" />
            SOBRE NOSOTROS
          </a>
        </li>
        <li className="Nav-item">
          <a href="#"><img src="src/assets/productos.svg" alt="" className="Nav-icon" />
            PRODUCTOS
          </a>
        </li>
      </ul>
    </nav>
  )
}