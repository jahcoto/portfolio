import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

import '../styles/work-list.css';

const WorksList = ({ limit }) => {
  return (
    <section className="works">
      {trabajos.slice(0, limit).map(trabajo => {
        return (
          <article key={trabajo.id} className="work-item">
            <div className="mask">
              <img src={`./images/${trabajo.id}.PNG`} alt="" />
            </div>
            <span>{trabajo.Category}</span>
            <h2>
              <Link to={`/proyecto/${trabajo.url}`}>{trabajo.name}</Link>
            </h2>
            <h3>{trabajo.technologies}</h3>
          </article>
        );
      })}
    </section>
  );
};

export default WorksList;
