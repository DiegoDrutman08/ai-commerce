import React from 'react';

function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">© {new Date().getFullYear()} AICommerce Business. Todos los derechos reservados.</div>
          <div className="col-lg-8 text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="#">Política de Privacidad</a>
            <a className="link-dark text-decoration-none" href="#">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
