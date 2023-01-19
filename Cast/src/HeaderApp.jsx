import './assets/logo.svg';
import { ilogo } from 'img.jsx';

export function HeaderApp() {
  return (
    <div className="Header">
      <section className="Header-flex">
        <ilogo></ilogo>
        <p className="Header-info">
        Servicios de calidad y rapidez
        </p>
        <a href="https://wa.me/528682592253" className="Header-btn">Contactanos</a>
        <p className="Header-bt">!Cotiza sin compromiso!</p>
      </section>
    </div>
  )

}