import inicio from "/src/assets/inicio.svg"
import servicios from "/src/assets/Servicios.svg"
import sobreNosotros from "/src/assets/Sobre nosotros.svg"
import productos from "/src/assets/Productos.svg"
import "/src/assets/Servicios.svg"
export function Navbar() {
  return (
    <nav className="Nav">
      <ul className="Nav-lis">
        <li className="Nav-item">
          <a href="#"><img src={inicio} alt="Inicio img" className="Nav-icon" />
            INICIO
          </a>
        </li>
        <li className="Nav-item">
          <a href="#Servicios" ><img src={servicios} alt="Servicios img" className="Nav-icon" />
            SERVICIOS
          </a>
        </li>
        <li className="Nav-item">
          <a href="#Sobre nosotros" ><img src={sobreNosotros} alt="Sobre nosotros img" className="Nav-icon" />
            SOBRE NOSOTROS
          </a>
        </li>
        <li className="Nav-item">
          <a href="#"><img src={productos} alt="Productos img" className="Nav-icon" />
            PRODUCTOS
          </a>
        </li>
      </ul>
    </nav>
  )
}