import Select from '../../components/form/select'
import Input from '../../components/form/input'
import SubmitButton from '../../components/form/submitButton'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import React from "react";
import { createUser, setTokenRole } from "../../services/services";
import hamburgreenLogo from "../../img/hamburgreen-logo.png";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [positionUser, setPositionUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangePosition = (e) => {
    setPositionUser(e.target.value);
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log(name, email, password, positionUser)
    createUser(name, email, password, positionUser)
      .then((response) => response.json())
      .then((obj) => {
        if (obj.code) {
          throw (obj.message)
        } else {
          return obj
        }
      })
      .then((data) => {
        if (!data) return;
        setTokenRole(data.token, data.position);
        console.log(data);
        navigate("/");
      })
      .catch((error) => setError(error));
  }

  return (
    <form className='formSignup' onSubmit={handleCreateUser}>    
      <img src={hamburgreenLogo} className='hamburgreenLogo' />
      <Link className='voltarLink' to="/">Voltar</Link>
      
        <h1 className='signupTitle'>Cadastro</h1>
        <Input
          type="text"
          id="name"
          placeholder="Nome"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Select onChange={handleChangePosition} name="cargo" text="Cargo" />
        <SubmitButton type="submit" text="Cadastrar" />
    </form>    
  )
};
