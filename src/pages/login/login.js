import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <h1 className="login-form">Login</h1>
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
            <button type="submit">Entrar</button>
            <span>Não possui cadastro?</span>
            <Link to="signup/">Cadastre-se</Link>
        </div>
    )
}

export default Login;