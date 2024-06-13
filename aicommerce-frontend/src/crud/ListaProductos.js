import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';

function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/producto/producto/list/')
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta de la API:', data); // Verificar la respuesta de la API
        console.log('Productos:', data.productos); // Verificar los productos específicamente
        setProductos(data.productos || []); // Asegurarse de que productos sea un array o inicializarlo como array vacío si es undefined
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crealos, edítalos o borralos por categorías</div>
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
            {productos && productos.length > 0 ? (
              productos.map(producto => (
                <tr key={producto.pk}>
                  <td style={{ fontSize: '24px' }}>{producto.nombre}</td>
                  <td>
                    <Link className="btn btn-info btn-lg me-1" to={`/producto/producto/detail/${producto.pk}`}>Detalle</Link>
                    <Link className="btn btn-warning btn-lg me-1" to={`/producto/producto/update/${producto.pk}`}>Cambiar</Link>
                    <Link className="btn btn-danger btn-lg" to={`/producto/producto/delete/${producto.pk}`}>Borrar</Link>
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
