import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Contacto from '../components/Contacto';
import Curriculo from '../components/Curriculo';
import Servicios from '../components/Servicios';
import Inicio from '../components/Inicio.jsx';
import Portafolio from '../components/Portafolio';
import HeaderNav from '../components/layout/HeaderNav';
import Footer from '../components/layout/Footer';

const ProjectRoutes = () => {
  return (
    <Router>
      {/*Header y Navegacion*/}
      <HeaderNav />
      {/*Contenido central*/}
      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </section>

      {/*Footer*/}
      <Footer />
    </Router>
  );
};

export default ProjectRoutes;
