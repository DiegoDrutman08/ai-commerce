// Importar useEffect para realizar efectos secundarios
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';
import Cookies from 'js-cookie';

function FormularioProducto({ form }) {
  const [nombre, setNombre] = useState(form?.instance?.nombre || '');
  const [descripcion, setDescripcion] = useState(form?.instance?.descripcion || '');
  const [categoria, setCategoria] = useState(form?.instance?.categoria || '');
  const [precio, setPrecio] = useState(form?.instance?.precio || '');
  const [stock, setStock] = useState(form?.instance?.stock || '');
  const [imagen, setImagen] = useState(null);
  const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorías
  const navigate = useNavigate();

  // Función para cargar las categorías desde el backend
  const cargarCategorias = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/producto/categoria/list/');
      if (response.ok) {
        const data = await response.json();
        const categoriasJSON = JSON.parse(data.categorias); // Convertir la cadena JSON en un objeto JSON
        setCategorias(categoriasJSON);
      } else {
        console.error('Error al cargar las categorías');
      }
    } catch (error) {
      console.error('Error al cargar las categorías:', error);
    }
  };

  // Cargar las categorías al cargar el componente
  useEffect(() => {
    cargarCategorias();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obtener el token CSRF de la cookie
      const csrfToken = Cookies.get('csrftoken');

      // Construir un FormData object para enviar los datos del formulario, incluyendo la imagen
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('categoria', categoria);
      formData.append('precio', precio);
      formData.append('stock', stock);
      formData.append('imagen', imagen);

      // Incluir el token CSRF en el encabezado de la solicitud POST
      const response = await fetch('http://127.0.0.1:8000/producto/producto/create/', {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrfToken,
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Producto creado exitosamente');
        navigate('/productos');
      } else {
        console.error('Error al crear el producto');
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
          <div className="masthead-subheading">Crea, edítalos o bórralos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1 style={{ fontSize: '30px' }}>
            {form?.instance?.pk ? 'Editar' : 'Crear'} Producto
          </h1>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
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
          <div className="form-group">
            <label htmlFor="categoria">Categoría:</label>
            <select
              className="form-control"
              id="categoria"
              name="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Seleccionar categoría</option>
              {categorias.map((categoria) => (
                <option key={categoria.pk} value={categoria.pk}>
                  {categoria.fields.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              name="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              className="form-control"
              id="stock"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imagen">Imagen:</label>
            <div className="mb-3">
              <input
                type="file"
                className="form-control-file"
                id="imagen"
                name="imagen"
                onChange={(e) => setImagen(e.target.files[0])}
              />
            </div>
          </div>
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
