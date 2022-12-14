import Select from '../../components/form/select'
import Input from '../../components/form/input'
import SubmitButton from '../../components/form/submitButton'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import React from "react";
import { createUser, setTokenPosition } from "../../services/services";
import hamburgreenLogo from "../../img/hamburgreen-logo.png";

function Signup() {
  return (
    <div class="wrapperSignup">
      <img src={hamburgreenLogo} alt="hamburgreen logo" className='hamburgreenLogo' />
      <Link to="/">Voltar</Link>
      <form className='formSignup'>        
        <h1 className='signupTitle'>Cadastro</h1>
        <Input
          type="text"
          id="name"
          placeholder="Nome"
          name="name"
        />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
        />
        <Input
          type="password"
          id="password"
          placeholder="Senha"
          name="password"
        />
        <Select name="cargo" text="Cargo" />
        <SubmitButton type="submit" text="Cadastrar" />

      </form>
    </div>
    
  )
}

export const Register = () => {
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
        setTokenPosition(data.token, data.position);
        console.log(data);
        navigate("/");
      })
      .catch((error) => setError(error));
  }
};

export default Signup;