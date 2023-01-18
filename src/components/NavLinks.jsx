import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <div className="flex gap-10 ">
      <Link to="/shop">Tienda</Link>
      <Link to="/suscripcion">Suscripción</Link>
      <Link to="/para_empresas">Para empresas</Link>
      <Link to="/sobre_nosotros">Sobre nosotros</Link>
      <Link to="/contacto">Contacto</Link>
    </div>
  )
}

