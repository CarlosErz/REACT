import img from '/src/assets/image.jpg';
export function TestImg() {
  return (
    <div className="Header">
      <section className="Header-flex">
        <img type="image/svg+xml" src={img} alt="LOGO" className="Header-logo" />
        <p className="Header-info">
          Servicios de calidad y rapidez
        </p>
        <a href="https://wa.me/528682592253" className="Header-btn" target="_blank">Contactanos</a>
        <p className="Header-bt">!Cotiza sin compromiso!</p>
      </section>
    </div>
  )

}