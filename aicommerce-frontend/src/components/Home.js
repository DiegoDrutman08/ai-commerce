import React from 'react';
import BaseLayout from './BaseLayout';

function Home() {
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">¡Bienvenido!</div>
          <div className="masthead-subheading">Tu plataforma de comercio electrónico personalizable</div>
        </div>
      </header>
      <section className="page-section bg-light" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Acerca de Nosotros</h2>
            <h3 className="section-subheading text-muted">¡Descubre todo lo que AICommerce Business tiene para ofrecer!</h3>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="lead">AICommerce Business es una plataforma de comercio electrónico diseñada para brindarte la mejor experiencia de compra online. Desde productos de alta calidad hasta una interfaz fácil de usar, estamos aquí para satisfacer todas tus necesidades de compra.</p>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default Home;
