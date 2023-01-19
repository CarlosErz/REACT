
export function Navbar() {
  return (
    <nav className="Nav">
      <ul className="Nav-lis">
        <li className="Nav-item">
          <a href="#"><img src="src/assets/inicio.svg" alt="Inicio img" className="Nav-icon" />
            INICIO
          </a>
        </li>
        <li className="Nav-item">
          <a href="#Servicios" ><img src="../assets/Servicios.svg" alt="Servicios img" className="Nav-icon" />
            SERVICIOS
          </a>
        </li>
        <li className="Nav-item">
          <a href="#Sobre nosotros" ><img src="../assets/Sobre nosotros.svg" alt="Sobre nosotros img" className="Nav-icon" />
            SOBRE NOSOTROS
          </a>
        </li>
        <li className="Nav-item">
          <a href="#"><img src="../assets/productos.svg" alt="Productos img" className="Nav-icon" />
            PRODUCTOS
          </a>
        </li>
      </ul>
    </nav>
  )
}