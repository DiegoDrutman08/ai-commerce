import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';

function DetalleCategoria() {
  const { categoriaId } = useParams();
  const [categoria, setCategoria] = useState({ nombre: '', descripcion: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/producto/categoria/detail/${categoriaId}/`);
        const data = await response.json();
        if (response.ok) {
          setCategoria(data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoria();
  }, [categoriaId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crea, edita o elimina productos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <h1 style={{ fontSize: '30px' }}>Categoría</h1>
        <ul style={{ fontSize: '24px' }}>
          <li>Nombre: {categoria.nombre}</li>
          <li>Descripción: {categoria.descripcion}</li>
        </ul>
        <div className="fs-3 pb-4">
          <a href="/listacategorias" className="btn btn-primary btn-lg text-uppercase">Volver al inicio de producto</a>
        </div>
      </div>
    </BaseLayout>
  );
}

export default DetalleCategoria;
