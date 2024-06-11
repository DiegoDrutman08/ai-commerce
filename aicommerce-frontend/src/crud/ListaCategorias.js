import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayoutC'; // Asegúrate de que las importaciones necesarias estén intactas

function ListaCategoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/producto/categoria/list/')
      .then(response => response.json())
      .then(data => {
        console.log(data.categorias);
        const categorias = JSON.parse(data.categorias);
        setCategorias(categorias);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

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
            {categorias.length > 0 ? (
              categorias.map(categoria => (
                <tr key={categoria.pk}>
                  <td style={{ fontSize: '24px' }}>{categoria.fields.nombre}</td>
                  <td>
                    <Link className="btn btn-info btn-lg me-1" to={`producto/categoria/detail/${categoria.pk}/`}>Detalle</Link>
                    <Link className="btn btn-warning btn-lg me-1" to={`producto/categoria/update/${categoria.pk}/`}>Editar</Link>
                    <Link className="btn btn-danger btn-lg" to={`/producto/categoria/delete/${categoria.pk}/`}>Borrar</Link>
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
