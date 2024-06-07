import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';

function ListaCategoria({ categorias }) {
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crea, edita o elimina productos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <div className="py-lg-2">
          <input type="text" name="consulta" className="form-control" style={{ fontSize: '24px' }} placeholder="Buscar..." />
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" style={{ fontSize: '30px' }}>Categorías</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias ? (
              categorias.map(categoria => (
                <tr key={categoria.id}>
                  <td style={{ fontSize: '24px' }}>{categoria.nombre}</td>
                  <td>
                    <Link className="btn btn-info btn-lg me-1" to={`/categorias/${categoria.id}`}>Detalle</Link>
                    <Link className="btn btn-warning btn-lg me-1" to={`/categorias/${categoria.id}/editar`}>Editar</Link>
                    <Link className="btn btn-danger btn-lg" to={`/categorias/${categoria.id}/borrar`}>Borrar</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No hay categorías disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="fs-3 pb-4">
          <Link to="/principal" className="btn btn-secondary btn-lg text-uppercase">Volver al inicio de Producto</Link>
        </div>
      </div>
    </BaseLayout>
  );
}

export default ListaCategoria;
