import '../styles/servicios.css';

const Servicios = () => {
  return (
    <div className="page">
      <h1 className="heading">Servicios</h1>
      <section className="services">
        <article className="service">
          <h2>Diseño y Desarrollo Web</h2>
          <p className="introducion">
            Te ayudamos a diseñar, mantener y crear tu sitio y página web.
            Desarrollamos páginas web con las ultimas tecnologías de software
            tanto del lado del servidor como en la interfaz gráfica. Entre las
            tecnologías mas usadas estan:
            <ul>
              <li className="sub-section">Servidor (BackEnd)</li>
              <div className="items">
                <div className="item">
                  <p>NodeJS</p>
                  <i className="bx bxl-nodejs"></i>
                </div>
                <div className="item">
                  <p>Java</p>
                  <i className="bx bxl-java"></i>
                </div>
                <div className="item">
                  <p>PHP</p>
                  <i className="bx bxl-php"></i>
                </div>
              </div>

              <li className="sub-section">Diseño de la interfaz gráfica</li>
              <div className="items">
                <div className="item">
                  <p>React JS</p>
                  <i className="bx bxl-react"></i>
                </div>
                <div className="item">
                  <p>Angular</p>
                  <i className="bx bxl-angular"></i>
                </div>
                <div className="item">
                  <p>VueJS</p>
                  <i className="bx bxl-vuejs"></i>
                </div>
                <div className="item">
                  <p>JavaScript</p>
                  <i className="bx bxl-javascript"></i>
                </div>
                <div className="item">
                  <p>CSS</p>
                  <i className="bx bxl-css3"></i>
                </div>
                <div className="item">
                  <p>Tailwind CSS</p>
                  <i className="bx bxl-tailwind-css"></i>
                </div>
                <div className="item">
                  <p>Boostrap CSS</p>
                  <i className="bx bxl-bootstrap"></i>
                </div>
              </div>

              <li className="sub-section">Base de Datos</li>
              <div className="items">
                <div className="item">
                  <p>MongoDB</p>
                  <i className="bx bxl-mongodb"></i>
                </div>
              </div>
            </ul>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Servicios;
