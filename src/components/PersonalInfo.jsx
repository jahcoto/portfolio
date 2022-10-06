import '../styles/personal-info.css';

const PersonalInfo = () => {
  return (
    <div className="container">
      <h2 className="title-text">Información Personal</h2>
      <div className="residencia">
        <div className="encabezado">
          <h3>Lugar de residencia:</h3>
        </div>
        <div className="first">
          <div className="first-top">
            <div className="pais">
              <p>País:</p>
              <h4>Costa Rica</h4>
            </div>
            <div className="provincia">
              <p>Provincia:</p>
              <h4>Cartago</h4>
            </div>
          </div>
          <div className="first-bottom">
            <div className="canton">
              <p>Canton:</p>
              <h4>Cartago</h4>
            </div>
            <div className="distrito">
              <p>Distrito:</p>
              <h4>Guadalupe o Arenilla</h4>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="direccion">
            <p>Direccion:</p>
            <h4>
              Del Super la Violetera, 300 metros oeste y 75 metros sur, casa
              color lila a mano izquierda.
            </h4>
          </div>
        </div>
        <div className="encabezado">
          <h3>Otros datos:</h3>
        </div>

        <div className="otros-datos">
          <div className="identificacion">
            <p>Cedula:</p>
            <h4>3-0394-0911</h4>
          </div>
          <div className="telefono">
            <p>#Celular:</p>
            <h4>+506 8503-7325</h4>
          </div>
          <div className="email">
            <p>e-mail:</p>
            <h4>jahcoto@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
