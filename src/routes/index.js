import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'components/Home'
import Shop from 'components/Shop';
import React from 'react';


export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
};