import Select from '../../components/form/select'
import Input from '../../components/form/input'
import SubmitButton from '../../components/form/submitButton'
import { Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import { login, setTokenRole } from "../../services/services";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      login(email, password)
        .then((response) => response.json())
        .then((obj) => {
          if (obj.code) {
            throw (obj.message);
          } else {
            return obj;
          }
        })
        .then((data) => {
          if (!data) return;
          setTokenRole(data.token, data.position);
          if (data.role === 'garçom') {
            navigate('/menu');
          } if (data.role === 'chefe') {
            navigate('/cozinha');
          } 
        })
        .catch((error) => setError(error));
    }

  return (
        <form>
            <h1>Login</h1>
            <Input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                id="password"
                placeholder="Senha"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{error}</p>
            <Select name="cargo" text="Cargo"/>
            <SubmitButton onClick={handleLogin} type="submit" text="Entrar" />
            <span>Não possui cadastro?</span>
            <Link to="signup/">Cadastre-se</Link>
        </form >
    )
};

