import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="/">AICommerce Business</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <a className="nav-link" href="/categorias">Categorías</a>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Staff</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
