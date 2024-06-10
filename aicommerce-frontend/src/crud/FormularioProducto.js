import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayoutC';

function FormularioProducto({ form }) {
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crea, edítalos o bórralos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <form method="post" encType="multipart/form-data">
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
              value={form?.instance?.nombre}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              className="form-control"
              id="descripcion"
              name="descripcion"
              value={form?.instance?.descripcion}
              onChange={(e) => console.log(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoría:</label>
            <select
              className="form-control"
              id="categoria"
              name="categoria"
              value={form?.instance?.categoria}
              onChange={(e) => console.log(e.target.value)}
            >
              {/* Opciones de categoría */}
              {form?.instance?.categoria && (
                <option value={form?.instance?.categoria}>{form?.instance?.categoria}</option>
              )}
              {/* Aquí deberías cargar las opciones de categoría desde tu backend */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              name="precio"
              value={form?.instance?.precio}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              className="form-control"
              id="stock"
              name="stock"
              value={form?.instance?.stock}
              onChange={(e) => console.log(e.target.value)}
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
                onChange={(e) => console.log(e.target.files[0])}
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
