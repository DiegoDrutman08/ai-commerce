import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de inicio de sesión exitoso
    // Aquí puedes agregar la lógica de inicio de sesión real
    // Después de un inicio de sesión exitoso, redirige a la página principal del CRUD
    setTimeout(() => {
      navigate('/principal'); // Cambiar a la ruta de la página principal del CRUD
    }, 1000); // Simulación de retardo de 1 segundo para el inicio de sesión
  };

  return (
    <div>
      <section className="page-section bg-light" id="pedido">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Iniciar sesión</h2>
                <h3 className="section-subheading text-muted">Completa los campos para ingresar.</h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <form onSubmit={handleSubmit} className="text-center">
                    <div className="form-group mb-3">
                      <input type="text" className="form-control" placeholder="Nombre de usuario" required />
                    </div>
                    <div className="form-group mb-3">
                      <input type="password" className="form-control" placeholder="Contraseña" required />
                    </div>
                    <input type="hidden" name="next" value="/principal" /> {/* Cambiar a la ruta de la página principal del CRUD */}
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    <button onClick={() => navigate('/')} className="btn btn-secondary">Cancelar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
