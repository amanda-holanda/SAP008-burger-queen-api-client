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

//passo a passo
// [X] - spa: fazer as funções de hashchanges para fazer as rotas 
// [X] - componentizar os inputs
// [] - colocar o valor dos inputs no body do objeto/funcao do createUser: https://www.youtube.com/watch?v=KCcSzv1RmuI
// [] - colocar o then com o data na linha 26 (dps do then)
// [] - fazer os testes no postman
