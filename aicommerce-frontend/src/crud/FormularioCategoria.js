import React from 'react';
import BaseLayout from './BaseLayoutC';

function FormularioCategoria({ onSubmit, form }) {
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crea, edita o elimina productos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <h3 style={{ fontSize: '30px' }}>Agregar categoría</h3>
        <form onSubmit={onSubmit}>
          <table style={{ fontSize: '24px' }}>
            <tbody>
              <tr>
                <td>{form && form.label_tag}</td>
                <td>{form}</td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="btn btn-primary btn-lg text-uppercase">Guardar</button>
        </form>
        <div className="fs-3 pb-4">
          <a href="/principal" className="btn btn-secondary btn-lg text-uppercase mt-2">Volver al inicio de Producto</a>
        </div>
      </div>
    </BaseLayout>
  );
}

export default FormularioCategoria;
