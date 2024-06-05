import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage'; // Crear esta página más adelante
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={ProductPage} />
            {/* Agregar más rutas según sea necesario */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
