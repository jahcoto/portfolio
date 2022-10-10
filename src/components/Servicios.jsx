import '../styles/servicios.css';

const Servicios = () => {
  return (
    <div className="page">
      <h1 className="heading">Servicios</h1>
      <section className="services">
        <article className="service">
          <h2>Diseño Web</h2>
          <p>Te ayudamos a diseñar, mantener y crear tu sitio y página web.</p>
        </article>
        <article className="service">
          <h2>Desarrollo Web</h2>
          <p>
            Desarrollamos páginas web con las ultimas tecnologías de software
            tanto del lado del servidor como en la interfaz gráfica. Entre las
            tecnologías mas usadas estan:
            <ul>
              <li>Servidor (BackEnd)</li>
              <p>NodeJs, JAVA, C#, PHP</p>
              <li>Diseño de la interfaz gráfica</li>
              <p>ReactJS, Angular, VueJs</p>
              <li>Motores de BD</li>
              <p>MondogDB, MySQL, SQL Lite, SQL Server</p>
            </ul>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Servicios;
