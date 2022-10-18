import { Link } from 'react-router-dom';
import WorksList from './WorksList';

import '../styles/inicio.css';

const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Mi nombre es <strong>Jonathan Hernández Coto</strong>, soy desarrollador
        web y desarrollodor SQL(PL-SQL) en Costa Rica. Ofrezco mis servicios
        como
        <strong> desarrollador </strong> en todo tipo de proyectos Web.
        <span>
          <Link to="/contacto" className="title">
            Contactame
          </Link>
        </span>
      </h1>
      <section className="last-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <div className="works">
          <WorksList limit="3" />
        </div>
      </section>
    </div>
  );
};

export default Inicio;
