const Contacto = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <form className="contact" action="mailto:jahcoto@gmail.com">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" placeholder="Nombre" />
        <label htmlFor="apellidos">Apellidos:</label>
        <input type="text" name="apellidos" placeholder="Apellidos" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="motivo">Motivo de Contacto:</label>
        <textarea name="motivo" placeholder="Motivo de contacto" rows="10" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Contacto;
