import logo from '/src/assets/AboutUs.jpg';
export function Erro404() {
  return (
    <div className="Error404">
      <img type="image/jpg" src={logo} alt="404-Error" />
        <p>Servicios de calidad y rapidez</p>
        <p>!Cotiza sin compromiso!</p>
    </div>
  )
}