import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

function NavBar({ username }) {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navBarHidden, setNavBarHidden] = useState(false);
  const navigate = useNavigate();  // Crea una instancia de useNavigate

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      setNavBarHidden(true);
    } else {
      setNavBarHidden(false);
    }
    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleLogout = () => {
    console.log("User logged out");
    // Aquí se debería manejar la lógica de logout, posiblemente haciendo una petición a un API
    // y luego redirigir al inicio
    navigate('/');  // Redirige al inicio después del logout
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${navBarHidden ? 'navbar-hidden' : ''}`} id="mainNav">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav w-100 justify-content-between">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <div className="d-flex">
                <span className="nav-link" style={{ fontSize: '18px' }}>{username}</span>
                <button onClick={handleLogout} className="btn btn-danger ms-auto">Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
