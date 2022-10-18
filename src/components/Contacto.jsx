import '../styles/contacto.css';

const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      <div className="contact">
        <form className="contact-form" action="mailto:jahcoto@gmail.com">
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="form-input"
            type="text"
            name="nombre"
            placeholder="Nombre"
          />
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            className="form-input"
            type="text"
            name="apellidos"
            placeholder="Apellidos"
          />
          <label htmlFor="email">Email:</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <label htmlFor="motivo">Motivo de Contacto:</label>
          <textarea
            className="form-input"
            name="motivo"
            placeholder="Motivo de contacto"
            rows="10"
          />
          <input className="submit" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Contacto;
