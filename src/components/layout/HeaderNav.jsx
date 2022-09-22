import { NavLink, useLocation } from 'react-router-dom';
const HeaderNav = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <header className="header">
      <div className="logo">
        <span>J</span>
        <h3>onathan Hernández Coto</h3>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              className={`${urlActual === '/inicio' ? 'active' : ''}`}
              to="/inicio"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${urlActual === '/portafolio' ? 'active' : ''}`}
              to="/portafolio"
            >
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${urlActual === '/servicios' ? 'active' : ''}`}
              to="/servicios"
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${urlActual === '/curriculo' ? 'active' : ''}`}
              to="/curriculo"
            >
              Curriculo
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${urlActual === '/contacto' ? 'active' : ''}`}
              to="/contacto"
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
