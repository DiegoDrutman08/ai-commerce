import React from 'react';
import NavBar from './Navbar';

function Contacto() {
  return (
    <div>
      <NavBar />
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">Contáctanos</div>
          <div className="masthead-subheading">Contacto</div>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">¿Tienes alguna pregunta?</h2>
                <h3 className="section-subheading text-muted">¡Estamos aquí para ayudarte!</h3>
              </div>
              <form id="contactForm" method="post">
                <div className="form-group mb-3">
                  <input className="form-control" type="text" name="name" placeholder="Nombre" required />
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" type="email" name="email" placeholder="Correo electrónico" required />
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" type="text" name="subject" placeholder="Asunto" required />
                </div>
                <div className="form-group mb-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                </div>
                <button className="btn btn-primary btn-xl text-uppercase" type="submit">Enviar mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
