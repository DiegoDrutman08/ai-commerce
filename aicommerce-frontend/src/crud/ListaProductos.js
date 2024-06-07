import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';

function ListaProductos({ productos }) {
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crealos, editalos o borralos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <div className="py-lg-2">
          <form action="/producto/producto_list" method="get">
            <input type="text" name="consulta" className="form-control fs-5" placeholder="Buscar..." />
          </form>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" style={{ fontSize: '30px' }}>Productos</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos ? (
              productos.map(producto => (
                <tr key={producto.id}>
                  <td style={{ fontSize: '24px' }}>{producto.nombre}</td>
                  <td>
                    <Link className="btn btn-info btn-lg me-1" to={`/producto/producto_detail/${producto.id}`}>Detalle</Link>
                    <Link className="btn btn-warning btn-lg me-1" to={`/producto/producto_update/${producto.id}`}>Cambiar</Link>
                    <Link className="btn btn-danger btn-lg" to={`/producto/producto_delete/${producto.id}`}>Borrar</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No hay productos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-4">
          <Link className="btn btn-secondary btn-lg text-uppercase" to="/principal">Volver al inicio de Producto</Link>
        </div>
      </div>
    </BaseLayout>
  );
}

export default ListaProductos;
