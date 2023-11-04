// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProductList from './Components/ProductList'; // Import your ProductList component
// import Cart from './Components/Cart'; // Import your Cart component

// App.js

import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Shopping Cart App</h1>
        </header>
        <main>
          <Routes>
            <Route path="." element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

