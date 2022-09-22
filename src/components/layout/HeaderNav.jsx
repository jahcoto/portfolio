import { NavLink } from 'react-router-dom';
const HeaderNav = () => {
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
              to="/inicio"
              className={({ isActive }) => {
                console.log(isActive);
                isActive ? 'active' : '';
              }}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
          </li>
          <li>
            <NavLink to="/servicios">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/curriculo">Curriculo</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
