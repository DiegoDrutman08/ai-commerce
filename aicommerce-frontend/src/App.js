import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductPage from './components/ProductPage';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/products/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
