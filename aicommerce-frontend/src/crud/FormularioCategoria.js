import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';
import Cookies from 'js-cookie';

function FormularioCategoria({ form }) {
  const [nombre, setNombre] = useState(form?.instance?.nombre || '');
  const [descripcion, setDescripcion] = useState(form?.instance?.descripcion || '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obtener el token CSRF de la cookie
      const csrfToken = Cookies.get('csrftoken');

      // Incluir el token CSRF en el encabezado de la solicitud POST
      const response = await fetch('http://127.0.0.1:8000/producto/categoria/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ nombre, descripcion }),
      });

      if (response.ok) {
        console.log('Categoría creada exitosamente');
        navigate('/listacategorias');
      } else {
        console.error('Error al crear la categoría');
        // Manejar el error de acuerdo a tus necesidades
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      // Manejar el error de acuerdo a tus necesidades
    }
  };

  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crea, edita o elimina productos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <h1 style={{ fontSize: '30px' }}>{form?.instance?.pk ? 'Editar' : 'Agregar'} Categoría</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre de la Categoría:</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              className="form-control"
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg text-uppercase">Guardar</button>
        </form>
        <div className="fs-3 pb-4">
          <Link to="/principal" className="btn btn-secondary btn-lg text-uppercase mt-2">Volver al inicio de Producto</Link>
        </div>
      </div>
    </BaseLayout>
  );
}

export default FormularioCategoria;
