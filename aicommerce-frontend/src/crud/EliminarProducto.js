import React from 'react';
import { Link } from 'react-router-dom';

function EliminarProducto({ producto }) {
  const handleDelete = () => {
    // Aquí puedes agregar la lógica para eliminar el producto
    // Por ejemplo, podrías enviar una solicitud al backend para eliminar el producto
    // Después de eliminar el producto, podrías redirigir al usuario a la página de inicio de Producto
  };

  return (
    <div>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crealos, editalos o borralos por categorias</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <h1 style={{ fontSize: '30px' }}>Eliminar producto</h1>
        <p className="fs-3 fst-italic">¿Confirma eliminar "{producto.nombre}"?</p>

        <form onSubmit={handleDelete} className="mt-4">
          {/* Agrega el token CSRF si es necesario */}
          <button type="submit" className="btn btn-danger btn-lg text-uppercase">Confirmar</button>
        </form>
        <div className="fs-3 pb-4 mt-2">
          <Link to="/producto/home" className="btn btn-secondary btn-lg text-uppercase">Volver al inicio de Producto</Link>
        </div>
      </div>
    </div>
  );
}

export default EliminarProducto;
