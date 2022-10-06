import '../styles/experience.css';

const Experiencia = () => {
  return (
    <div className="container">
      <h2 className="title-text">Experiencia Laboral</h2>
      <div className="experiencia">
        <div className="experiencia-item">
          <div className="encabezado">
            <h3>GBM de Costa Rica S.A.</h3>
          </div>
          <div className="detalle">
            <div className="puesto">
              <p>Puesto:</p>
              <span>Ingeniero en Sistemas.</span>
            </div>
            <div className="tiempo">
              <p>Tiempo laborado:</p>
              <span>Febrero 2013 - Junio 2022.</span>
            </div>
            <div className="telefono">
              <p>Teléfono:</p>
              <span>2288-3999.</span>
            </div>
            <div className="funciones">
              <p>Funciones y logros:</p>
              <div>
                <ul>
                  <li>
                    Disenar y crear casos de prueba basados en los
                    requerimientos del negocio y especificaciones funcionales.
                  </li>
                  <li>
                    Full Stack Developer: Creación y mantenimiento de ventana de
                    reportes, realizada en JAVA-JSP y Oracle DB.
                  </li>
                  <li>
                    Creación de diversos scripts parar la extración de
                    información, carga de información en la base de datos y
                    generación de reportes web con PL/SQL(UTL_MAIL).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="experiencia-item">
          <div className="encabezado">
            <h3>Coral Technologies S.A.</h3>
          </div>
          <div className="detalle">
            <div className="puesto">
              <p>Puesto:</p>
              <span>Técnico en Sistemas.</span>
            </div>
            <div className="tiempo">
              <p>Tiempo laborado:</p>
              <span>Enero 2012 - Enero 2013.</span>
            </div>
            <div className="telefono">
              <p>Teléfono:</p>
              <span>2283-2222.</span>
            </div>
            <div className="funciones">
              <p>Funciones y logros:</p>
              <div>
                <ul>
                  <li>
                    Parte del equipo enfocado en la depuración de la herramienta
                    según los requerimientos funcionales y técnicos.
                  </li>
                  <li>
                    Disenar y crear casos de prueba basados en los
                    requerimientos del negocio y especificaciones funcionales.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
