import React from 'react';

function DetalleCategoria({ nombre, descripcion }) {
  return (
    <div className="container my-5">
      <h1 style={{ fontSize: '30px' }}>Categoría</h1>
      <ul style={{ fontSize: '24px' }}>
        <li>Nombre: {nombre}</li>
        <li>Descripción: {descripcion}</li>
      </ul>
      <div className="fs-3 pb-4">
        <a href="/categoria_list" className="btn btn-primary btn-lg text-uppercase">Volver al inicio de producto</a>
      </div>
    </div>
  );
}

export default DetalleCategoria;
