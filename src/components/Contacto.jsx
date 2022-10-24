import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contacto.css';

const Contacto = () => {
  const form = useRef();

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [reply_to, setReply_to] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = e => {
    e.preventDefault();
    if (!nombre) {
      alert('El campo nombre es requerido!!!');
    } else if (!reply_to) {
      alert('El campo email es requerido!!!');
    } else if (!message) {
      alert('El campo motivo es requerido!!!');
    } else {
      emailjs
        .sendForm(
          'service_o56d2wt',
          'template_9dzp6ca',
          form.current,
          'k17CIQh_qS8gMklCG',
        )
        .then(
          result => {
            console.log(result.text);
            alert('Email enviado correctamente!!!');
          },
          error => {
            console.log(error.text);
            alert('Error al enviar el email!!!');
          },
        );
    }
  };

  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      <div className="contact">
        <form className="contact-form" ref={form} onSubmit={handleSendEmail}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="form-input"
            type="text"
            name="nombre"
            value={nombre}
            placeholder="Nombre"
            onChange={e => setNombre(e.target.value)}
          />
          <label htmlFor="reply_to">Email:</label>
          <input
            className="form-input"
            type="email"
            name="reply_to"
            value={reply_to}
            placeholder="Email"
            onChange={e => setReply_to(e.target.value)}
          />
          <label htmlFor="message">Motivo de Contacto:</label>
          <textarea
            className="form-input"
            name="message"
            value={message}
            placeholder="Motivo de contacto"
            rows="10"
            onChange={e => setMessage(e.target.value)}
          />
          <input className="submit" type="submit" value="Enviar" />
        </form>
        <h2>O</h2>
        <div className="message">
          <h3 className="contact-card-title">Mandame un mensaje: </h3>
          <a
            href="https://api.whatsapp.com/send?phone=50685067325&text=Buenas, para poder contactarme con usted!"
            className="contact-button"
            target="_blank"
          >
            <i className="bx bxl-whatsapp whatsapp"></i>
            <span className="contact-card-data">(506) 8506-7325</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
