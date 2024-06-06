import React from 'react';
import { Link } from 'react-router-dom';

function Principal() {
  return (
    <div>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Crea, edita o elimina productos por categorías</div>
          <h1 className="masthead-heading text-uppercase">Productos</h1>
        </div>
      </header>
      <div className="container my-5">
        <h3 className="pb-3 border-bottom" style={{ fontSize: '30px' }}>Categorías</h3>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
          <Link to="/formulariocategoria" className="btn btn-primary btn-lg me-md-2" role="button">Agregar Categoría</Link>
          <Link to="/listacategorias" className="btn btn-outline-primary btn-lg" role="button">Listar Categorías</Link>
        </div>

        <h3 className="pb-3 border-bottom" style={{ fontSize: '30px' }}>Productos</h3>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
          <Link to="/formularioproducto" className="btn btn-success btn-lg me-md-2" role="button">Agregar Producto</Link>
          <Link to="/listaproductos" className="btn btn-outline-success btn-lg" role="button">Listar Productos</Link>
        </div>
      </div>
    </div>
  );
}

export default Principal;
