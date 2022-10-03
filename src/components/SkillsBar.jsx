import '../styles/skills-bar.css';

const SkillsBar = () => {
  return (
    <div className="container">
      <h2 className="title-text">Mis Skills</h2>
      <div className="skill-box">
        <span className="title">HTML</span>
        <div className="skill-bar">
          <div className="skill-per html">
            <span className="tooltip">70%</span>
          </div>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">CSS</span>
        <div className="skill-bar">
          <div className="skill-per css">
            <span className="tooltip">40%</span>
          </div>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">JavaScript</span>
        <div className="skill-bar">
          <div className="skill-per javascript">
            <span className="tooltip">60%</span>
          </div>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">ReactJS</span>
        <div className="skill-bar">
          <div className="skill-per reactjs">
            <span className="tooltip">50%</span>
          </div>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">NodeJS</span>
        <div className="skill-bar">
          <div className="skill-per nodejs">
            <span className="tooltip">25%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBar;
