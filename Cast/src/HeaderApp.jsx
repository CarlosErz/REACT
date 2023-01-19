import './assets/logo.svg';
import { IMG } from './img';

export function HeaderApp() {
  return (
    <div className="Header">
      <section className="Header-flex">
        <IMG />
        <p className="Header-info">
        Servicios de calidad y rapidez
        </p>
        <a href="https://wa.me/528682592253" className="Header-btn">Contactanos</a>
        <p className="Header-bt">!Cotiza sin compromiso!</p>
      </section>
    </div>
  )

}