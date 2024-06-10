import BaseLayout from './BaseLayout';
import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log("Datos del formulario:", formData); // Asegúrate de que los datos se muestran correctamente aquí
      const response = await fetch('http://localhost:8000/api/contacto/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        if (data.errors) {
          console.log("Errores de validación:", data.errors);
        } else {
          console.log("Error:", data.message);
        }
      }
    } catch (error) {
      console.error('Error al enviar el formulario de contacto:', error);
      setResponseMessage('Error al enviar el mensaje');
    }
  };

  
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">Contacto</div>
          <div className="masthead-subheading">Comunicate con nosotros</div>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center">
                {/* Título y subtítulo */}
              </div>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input className="form-control" type="text" name="name" placeholder="nombre" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" type="text" name="subject" placeholder="asunto" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group mb-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="mensaje" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button className="btn btn-primary btn-xl text-uppercase" type="submit">Enviar mensaje</button>
              </form>
              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default Contacto;
