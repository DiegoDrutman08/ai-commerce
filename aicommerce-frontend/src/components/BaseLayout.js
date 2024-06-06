import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function BaseLayout({ children }) {
  return (
    <div className="base-layout">
      <Navbar />
      <header></header>
      <main>{children}</main>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default BaseLayout;
