import React from 'react';
import { Link } from 'react-router-dom';

function DetalleProducto({ producto }) {
  return (
    <div>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crealos, editalos o borralos por categorias</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <h1 style={{ fontSize: '30px' }}>Detalle del Producto</h1>
        <ul>
          <li style={{ fontSize: '24px' }}>Categoria: {producto.categoria}</li>
          <li style={{ fontSize: '24px' }}>Nombre: {producto.nombre}</li>
          <li style={{ fontSize: '24px' }}>Telefono: {producto.telefono}</li>
          <li style={{ fontSize: '24px' }}>Email: {producto.email}</li>
          <li style={{ fontSize: '24px' }}>Descripcion: {producto.descripcion}</li>
          <li style={{ fontSize: '24px' }}>Fecha: {producto.fecha_actualizacion}</li>
          {producto.imagen ? (
            <li style={{ fontSize: '24px' }}>Imagen: <img src={producto.imagen.url} alt="Imagen de Producto" /></li>
          ) : (
            <li style={{ fontSize: '24px' }}>Imagen: No disponible</li>
          )}
        </ul>

        <div className="fs-3 pb-4">
          <Link to="/producto/home" className="btn btn-secondary btn-lg text-uppercase">Volver al inicio de Producto</Link>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
