import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/login';
import Signup from './pages/signup/signup.js';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    <Signup />
  </React.StrictMode>
);


