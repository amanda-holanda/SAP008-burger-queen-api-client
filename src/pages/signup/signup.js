import { Link,  useNavigate } from 'react-router-dom';
import { useState } from "react";
import React from "react";
import { createUser, setTokenPosition } from "../../services/services";

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
          if(!data) return;
          setTokenPosition(data.token, data.position);
          console.log(data);
          navigate("/");
        })
        .catch((error) => setError(error));
    }};

function Signup() {
    return (
        <div>
            <form>
                <h1>Cadastro</h1>
                <Link to="/">Voltar</Link>
                <label for="user">
                    <input type="text" placeholder="Nome" name="name"></input>
                </label>
                <label for="user">
                    <input type="email" placeholder="Email" name="email"></input>
                </label>
                <label for="user">
                    <input type="password" placeholder="Senha" name="password"></input>
                </label>
                <select name="cargos">
                    <option value="atendente">Atendente</option>
                    <option value="Cozinha">Cozinha</option>
                </select>
                <button type="submit">Cadastrar</button>

            </form>
        </div>
    )
}

export default Signup;