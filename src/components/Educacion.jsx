import '../styles/educacion.css';

const Educacion = () => {
  return (
    <div className="container">
      <h2 className="title-text">Educación</h2>

      <div className="educacion">
        <div className="educacion-item">
          <div className="encabezado">
            <h3>Universidad Americana(UAM)</h3>
          </div>
          <div className="detalle">
            <div className="titulo">
              <p>Titulo:</p>
              <span>Ingeniería en Sistemas.</span>
              <span>Junio 2017.</span>
            </div>
          </div>
        </div>
        <div className="educacion-item">
          <div className="encabezado">
            <h3>Bachillerato Jimenez</h3>
          </div>
          <div className="detalle">
            <div className="titulo">
              <p>Titulo:</p>
              <span>Diseno Web.</span>
              <span>Junio 2010.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educacion;
