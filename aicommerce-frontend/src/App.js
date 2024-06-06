import React from 'react';
import './styles/static/css/styles.css';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <Home />
      </BaseLayout>
    </div>
  );
}

export default App;
