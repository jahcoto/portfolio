import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

const Project = () => {
  const params = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    let project = trabajos.filter(trabajo => trabajo.id === params.id);
    setProject(project[0]);
    console.log(project);
  }, []);

  return (
    <div className="page page-work">
      <div className="mask">
        <img src={`/images/${project.id}.PNG`} alt="" />
      </div>
      <div className="heading">Proyecto: {project.name}</div>
      <p>{project.technologies}</p>
      <p>{project.description}</p>
      <a href="https://weather-app-chi-ivory-45.vercel.app" target="_blank">
        Ir al proyecto
      </a>
    </div>
  );
};

export default Project;
