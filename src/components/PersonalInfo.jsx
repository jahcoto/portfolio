import '../styles/personal-info.css';

const PersonalInfo = () => {
  return (
    <div className="container">
      <h2 className="title-text">Información Personal</h2>
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
          <div className="canton">
            <h4>Cartago</h4>
            <p>Canton</p>
          </div>
          <div className="distrito">
            <h4>Guadalupe o Arenilla</h4>
            <p>Distrito</p>
          </div>
        </div>
        <div className="second">
          <div className="direccion">
            <h4>
              Del Super la Violetera, 300 metros oeste y 75 metros sur, casa
              color lila a mano izquierda.
            </h4>
            <p>Direccion</p>
          </div>
        </div>
        <h3 className="subtitle">Otros datos:</h3>
        <div className="otros-datos">
          <div className="identificacion">
            <h4>3-0394-0911</h4>
            <p>Cedula</p>
          </div>
          <div className="telefono">
            <h4>+506 8503-7325</h4>
            <p>#Celular</p>
          </div>
          <div className="email">
            <h4>jahcoto@gmail.com</h4>
            <p>e-mail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
