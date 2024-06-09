import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username: username,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        navigate('/principal');
      }
    } catch (error) {
      setError('Invalid credentials');
    }
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
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <input type="hidden" name="next" value="/principal" />
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
