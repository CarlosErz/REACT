import logo from '/public/minilogo.svg';
export function HeaderApp() {
  return (
    <div className="Header">
      <section className="Header-flex">
        <img src="" alt="" className="header-back-icon" />
        <img type="image/svg+xml" src={logo} alt="LOGO" className="Header-logo" />
        <p className="Header-info">
          Servicios de calidad y rapidez
        </p>
        <a href="https://wa.me/528682592253" className="Header-btn" target="_blank">Contactanos</a>
        <p className="Header-bt">!Cotiza sin compromiso!</p>
      </section>
    </div>
  )

}