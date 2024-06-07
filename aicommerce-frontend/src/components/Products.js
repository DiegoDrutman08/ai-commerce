import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout';

function Productos({ producto }) {
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Explora, edita o elimina productos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <h1 className="display-4">Detalle del Producto</h1>
        <div className="card mt-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={producto.imagenUrl} className="img-fluid rounded-start" alt={producto.nombre} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Categoría: {producto.categoria}</h5>
                <p className="card-text">Nombre: {producto.nombre}</p>
                <p className="card-text">Teléfono: {producto.telefono}</p>
                <p className="card-text">Email: {producto.email}</p>
                <p className="card-text">Descripción: {producto.descripcion}</p>
                <p className="card-text">
                  <small className="text-muted">Última actualización: {producto.fechaActualizacion}</small>
                </p>
                <Link to="/categorias" className="btn btn-secondary btn-lg">Volver al Inicio de Producto</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Productos;
