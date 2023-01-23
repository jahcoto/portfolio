import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '../../styles/header.css';
const HeaderNav = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  const [activeMenu, setActiveMenu] = useState(true);

  const handleClick = () => {
    if (activeMenu === false) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
    console.log(activeMenu);
  };

  return (
    <header className="header">
      <div className="topnav">
        <div className="logo">
          <span>J</span>
          <h3>onathan Hernández Coto</h3>
        </div>

        <div className={activeMenu === true ? 'myLinks' : null}>
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
        </div>
        <button className="icon" onClick={handleClick}>
          <i className="fa fa-bars"></i>
        </button>
        <button class="icon">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </header>
  );
};

export default HeaderNav;
