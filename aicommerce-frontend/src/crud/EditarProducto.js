import React from 'react';

function EditarProducto({ form }) {
  return (
    <div className="container my-5">
      <form method="post">
        <input type="hidden" name="csrfmiddlewaretoken" value={form.csrfmiddlewaretoken} />
        <h1 style={{ fontSize: '30px' }}>Editar Producto</h1>
        <table style={{ fontSize: '24px' }}>
          <tbody>
            <tr>
              <td>Categoría:</td>
              <td>{form.categoria}</td>
            </tr>
            <tr>
              <td>Nombre:</td>
              <td>{form.nombre}</td>
            </tr>
            <tr>
              <td>Teléfono:</td>
              <td>{form.telefono}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{form.email}</td>
            </tr>
            <tr>
              <td>Descripción:</td>
              <td>{form.descripcion}</td>
            </tr>
            <tr>
              <td>Fecha:</td>
              <td>{form.fecha_actualizacion}</td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary btn-lg text-uppercase">Guardar</button>
      </form>
      <div className="fs-3 pb-4">
        <a href="/producto_list" className="btn btn-secondary btn-lg text-uppercase mt-2">Volver al inicio de Producto</a>
      </div>
    </div>
  );
}

export default EditarProducto;
