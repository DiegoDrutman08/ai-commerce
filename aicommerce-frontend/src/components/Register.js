import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password1, password2 }),
    });

    const data = await response.json();
    if (response.ok) {
      // Manejar el registro exitoso y redirigir
      console.log('Registration successful:', data);
      history.push('/home'); // Redirige al usuario a la página de inicio
    } else {
      // Manejar errores de registro
      setErrors(data.errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="password1">Password</label>
        <input
          type="password"
          id="password1"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit">Register</button>
      {errors && (
        <div>
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key]}</p>
          ))}
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
