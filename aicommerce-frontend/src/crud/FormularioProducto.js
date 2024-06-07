import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';

function FormularioProducto({ form }) {
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crea, edítalos o bórralos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <form method="post" encType="multipart/form-data">
          <h1 style={{ fontSize: '30px' }}>
            {form?.instance?.pk ? 'Editar' : 'Crear'} Producto
          </h1>
          {form?.as_p}
          <button type="submit" className="btn btn-primary btn-lg text-uppercase float-left">Guardar</button>
        </form>
        <div className="fs-3 pb-4">
          <Link to="/principal" className="btn btn-secondary btn-lg text-uppercase float-left mt-2">Volver al inicio de Producto</Link>
        </div>
      </div>
    </BaseLayout>
  );
}

export default FormularioProducto;
