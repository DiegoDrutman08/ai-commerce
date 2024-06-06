import React from 'react';
import NavBar from './Navbar';

function About() {
  return (
    <div>
      <NavBar />
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">AICommerce Business</div>
          <div className="masthead-subheading">Acerca de AICommerce Business</div>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-center">Acerca de AICommerce Business</h2>
              <p className="lead">Una plataforma de comercio electrónico personalizable.</p>
              <p>AICommerce Business es una plataforma de comercio electrónico personalizable que permite a las empresas crear y gestionar sus propias tiendas en línea de manera eficiente y escalable. Utilizando tecnologías de inteligencia artificial, AICommerce Business proporciona una solución integral para empresas que desean establecer una presencia en línea y ofrecer una experiencia de compra personalizada a sus clientes.</p>
              <p>La plataforma permite a las empresas personalizar aspectos clave de sus tiendas en línea, como diseño, branding y categorías de productos, mientras ofrece recomendaciones de productos contextuales basadas en el historial de compras y el comportamiento del cliente.</p>
              <p className="lead">Acerca del Creador</p>
              <p>Soy Diego Drutman, un apasionado desarrollador de software con experiencia en Python y Django. AICommerce Business es un proyecto que he desarrollado para ayudar a las empresas a aprovechar el poder de la inteligencia artificial en el comercio electrónico.</p>
              <p>Me encanta trabajar en proyectos desafiantes y aprender nuevas tecnologías para mejorar mis habilidades. Estoy comprometido a brindar soluciones innovadoras y de alta calidad a través de mi trabajo en AICommerce Business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
