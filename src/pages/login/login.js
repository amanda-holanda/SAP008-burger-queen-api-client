import Select from '../../components/form/select'
import Input from '../../components/form/input'
import SubmitButton from '../../components/form/submitButton'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <form>
            <h1>Login</h1>
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
            <SubmitButton type="submit" text="Entrar" />
            <span>Não possui cadastro?</span>
            <Link to="signup/">Cadastre-se</Link>
        </form >
    )
}

export default Login;