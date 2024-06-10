import React from 'react';
import BaseLayout from './BaseLayout';

function Categorias({ categoriasConProductos }) {
  return (
    <BaseLayout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">Categorías disponibles</div>
          <div className="masthead-subheading">Categorías de Productos</div>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <div className="row">
            {categoriasConProductos ? (
              categoriasConProductos.map(categoria => (
                <div className="col-lg-4 col-md-6 mb-4" key={categoria.categoria}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h3 className="card-title">{categoria.categoria}</h3>
                      {categoria.productos.length > 0 ? (
                        categoria.productos.map(producto => (
                          <div className="card mb-2" key={producto.id}>
                            <img src={producto.imagen} alt={producto.nombre} className="card-img-top" />
                            <div className="card-body">
                              <h5 className="card-title">{producto.nombre}</h5>
                              <p className="card-text">$ {producto.precio}</p>
                              <a href={`/productos/${producto.id}`} className="btn btn-primary">Ver Detalles</a>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No hay productos disponibles en esta categoría.</p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay categorías disponibles.</p>
            )}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default Categorias;
