import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoutes from './routes/index'
import { BrowserRouter } from 'react-router-dom';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>
);
