import React from 'react';

function EditarCategoria({ form }) {
  return (
    <div className="container my-5">
      <form method="post">
        <input type="hidden" name="csrfmiddlewaretoken" value={form.csrfmiddlewaretoken} />
        <table style={{ fontSize: '30px' }}>
          <tbody>
            <tr>
              <td>Nombre:</td>
              <td>{form.nombre}</td>
            </tr>
            <tr>
              <td>Descripción:</td>
              <td>{form.descripcion}</td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary btn-sm text-uppercase">Guardar</button>
      </form>
      <div className="fs-3 pb-4">
        <a href="/categoria_list" className="btn btn-secondary btn-sm text-uppercase">Volver</a>
      </div>
    </div>
  );
}

export default EditarCategoria;
