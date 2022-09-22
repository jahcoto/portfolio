import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <h1>
        Mi nombre es Jonathan Hernández Coto, soy desarrollador web y
        desarrollodor SQL(PL-SQL) en Costa Rica. Ofrezco mis servicios como
        desarrollador en todo tipo de proyectos Web.
        <span>
          <Link to="/contacto">Contactame</Link>
        </span>
      </h1>
      <section className="last-works">
        <h2>Algunos de mis proyectos</h2>
        <div className="works"></div>
      </section>
    </div>
  );
};

export default Inicio;
