import Select from '../../components/form/select'
import Input from '../../components/form/input'
import SubmitButton from '../../components/form/submitButton'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { login, setTokenRole } from "../../services/services";
import hamburgreenLogo from '../../img/hamburgreen-logo.png';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password)
     .then((data) => {
        if (!data) return;
        setTokenRole(data.token, data.role);
        if (data.role === 'garçom') {
          navigate('/menu');
        }
      })
      .catch((error) => setError(error));
  }

  return (
    <form className='login' onSubmit={handleLogin}>
      <img className='imgLogin' alt="Logo Hamburgreen" src={hamburgreenLogo} />
      <h1 className='title'>Login</h1>

      <Input
        type="email"
        id="email"
        placeholder=" E-mail"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        id="password"
        placeholder=" Senha"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='loginbtn'>
        <p className="errorMsg">{error}</p>
        <Select name="cargo" text="Cargo" />
        <SubmitButton type="submit" text="Entrar" />
      </div>
      <div className='signUpContainer'>
        <span className='signupText'>Não possui cadastro?   
        </span>
        <Link className='signupBtn' to="signup/"> Cadastre-se</Link>
      </div>
      
    </form >
  )
};

