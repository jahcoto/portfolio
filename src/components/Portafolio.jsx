import { Link } from 'react-router-dom';

import { trabajos } from '../data/trabajos';

const Portafolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portafolio</h1>
      {trabajos.map(trabajo => {
        return (
          <>
            <article key={trabajo.id}>
              <span>{trabajo.Category}</span>
              <h2>
                <Link to={`/project/${trabajo.url}`}>{trabajo.name}</Link>
              </h2>
              <h3>{trabajo.technologies}</h3>
            </article>
          </>
        );
      })}
    </div>
  );
};

export default Portafolio;
