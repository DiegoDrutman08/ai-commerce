import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';

function DetalleProducto() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/producto/producto/detail/${productoId}/`);
        const data = await response.json();
        if (response.ok) {
          setProducto(data);
        } else {
          setError(data.error || 'Error al obtener los datos');
        }
      } catch (err) {
        setError('Error al obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [productoId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crea, edítalos o bórralos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <h1 style={{ fontSize: '30px' }}>Detalle del Producto</h1>
        <ul>
          <li style={{ fontSize: '24px' }}>Categoría: {producto.categoria}</li>
          <li style={{ fontSize: '24px' }}>Nombre: {producto.nombre}</li>
          <li style={{ fontSize: '24px' }}>Stock: {producto.stock}</li>
          <li style={{ fontSize: '24px' }}>Precio: {producto.precio}</li>
          <li style={{ fontSize: '24px' }}>Descripción: {producto.descripcion}</li>
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
    </BaseLayout>
  );
}

export default DetalleProducto;
