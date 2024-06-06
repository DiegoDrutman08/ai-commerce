import React from 'react';

function EliminarCategoria({ onSubmit, nombre }) {
  return (
    <div className="container my-5">
      <h1 style={{ fontSize: '30px' }}>Eliminar categoría</h1>
      <p className="fst-italic" style={{ fontSize: '24px' }}>¿Confirma eliminar "{nombre}"?</p>
      <form onSubmit={onSubmit}>
        <button type="submit" className="btn btn-danger btn-lg text-uppercase">Confirmar</button>
      </form>
      <div className="fs-3 pb-4">
        <a href="/" className="btn btn-secondary btn-lg text-uppercase mt-2">Volver al inicio de Producto</a>
      </div>
    </div>
  );
}

export default EliminarCategoria;
