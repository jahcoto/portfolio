import SkillsBar from './SkillsBar';
import PersonalInfo from './PersonalInfo';
import Experiencia from './Experiencia';
import Educacion from './Educacion';

import '../styles/curriculo.css';

const Curriculo = () => {
  return (
    <div className="page">
      <div className="curriculo">
        <h1 className="heading">Jonathan Hernández Coto</h1>
        <PersonalInfo />
        <SkillsBar />
        <Experiencia />
        <Educacion />
      </div>
    </div>
  );
};

export default Curriculo;
