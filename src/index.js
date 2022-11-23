import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/login';
import Signup from './pages/signup/signup.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup/*" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
