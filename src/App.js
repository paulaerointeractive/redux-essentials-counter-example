import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import Shop from './Shop.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
