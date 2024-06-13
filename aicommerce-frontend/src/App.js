import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/static/css/styles.css';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Categorias from './components/Category';
import Productos from './components/Products';
import About from './components/AboutMe';
import Contacto from './components/Contact';
import Login from './components/Login';
import NavBar from './components/Navbar';
import NavBarCrud from './crud/NavbarCrud';
import Principal from './crud/Principal';
import FormularioProducto from './crud/FormularioProducto';
import FormularioCategoria from './crud/FormularioCategoria';
import ListaProductos from './crud/ListaProductos';
import ListaCategorias from './crud/ListaCategorias';
import DetalleProducto from './crud/DetalleProducto';
import DetalleCategoria from './crud/DetalleCategoria';
import EditarProducto from './crud/EditarProducto';
import EditarCategoria from './crud/EditarCategoria';
import EliminarProducto from './crud/EliminarProducto';
import EliminarCategoria from './crud/EliminarCategoria';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const crudRoutes = ['/principal', '/formularioproducto', '/formulariocategoria', '/listaproductos', '/listacategorias', '/detalleproducto', '/detallecategoria', '/editarproducto', '/editarcategoria', '/eliminarproducto', '/eliminarcategoria'];
  const isCrudPage = crudRoutes.includes(location.pathname);

  return (
    <div className="App">
      {isCrudPage ? <NavBarCrud /> : (!isLoginPage && <NavBar />)}
      <Routes>
        <Route path="/" element={<BaseLayout><Home /></BaseLayout>} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/formularioproducto" element={<FormularioProducto />} />
        <Route path="/formulariocategoria" element={<FormularioCategoria />} />
        <Route path="/listaproductos" element={<ListaProductos />} />
        <Route path="/listacategorias" element={<ListaCategorias />} />
        <Route path="/producto/producto/detail/:productoId" element={<DetalleProducto />}/>
        <Route path="/producto/categoria/detail/:categoriaId" element={<DetalleCategoria />}/>
        <Route path="/editarproducto" element={<EditarProducto />} />
        <Route path="/editarcategoria" element={<EditarCategoria />} />
        <Route path="/eliminarproducto" element={<EliminarProducto />} />
        <Route path="/producto/categoria/delete/:id" component={EliminarCategoria} />
      </Routes>
    </div>
  );
}

export default App;
