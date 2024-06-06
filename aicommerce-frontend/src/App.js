import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/static/css/styles.css';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Categorias from './components/Category';
import About from './components/AboutMe';
import Contacto from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </BaseLayout>
      </div>
    </Router>
  );
}

export default App;
