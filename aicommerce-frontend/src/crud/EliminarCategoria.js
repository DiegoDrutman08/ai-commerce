import React from 'react';

function EliminarCategoria({ onDelete, nombre }) {
  const handleEliminarCategoria = (event) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    onDelete(); // Llama a la función onDelete que se pasa como prop
  };

  return (
    <div className="container my-5">
      <h1 style={{ fontSize: '30px' }}>Eliminar categoría</h1>
      <p className="fst-italic" style={{ fontSize: '24px' }}>¿Confirma eliminar "{nombre}"?</p>
      <form onSubmit={handleEliminarCategoria}>
        <button type="submit" className="btn btn-danger btn-lg text-uppercase">Confirmar</button>
      </form>
      <div className="fs-3 pb-4">
        <a href="/" className="btn btn-secondary btn-lg text-uppercase mt-2">Volver al inicio de Producto</a>
      </div>
    </div>
  );
}

export default EliminarCategoria;
