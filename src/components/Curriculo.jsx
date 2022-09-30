const Curriculo = () => {
  return (
    <div className="page">
      <div className="curriculo">
        <h1 className="heading">Jonathan Hernández Coto</h1>
        <div className="personal-info">
          <h2>Información Personal</h2>
          <div className="residencia">
            <h3 className="subtitle">Lugar de residencia:</h3>
            <div className="first">
              <div className="pais">
                <h4>Costa Rica</h4>
                <p>País</p>
              </div>
              <div className="provincia">
                <h4>Cartago</h4>
                <p>Provincia</p>
              </div>
            </div>
            <div className="second">
              <div className="canton">
                <h4>Cartago</h4>
                <p>Canton</p>
              </div>
              <div className="distrito">
                <h4>Guadalupe o Arenilla</h4>
                <p>Distrito</p>
              </div>
            </div>

            <div className="direccion">
              <h4>
                Del Super la Violetera, 300 metros oeste y 75 metros sur, casa
                color lila a mano izquierda.
              </h4>
              <p>Direccion</p>
            </div>
          </div>
        </div>

        <h2>Experiencia</h2>
        <h2>Conocimientos</h2>
        <h2>Educación</h2>
      </div>
    </div>
  );
};

export default Curriculo;
