import Select from '../../components/form/select'
import Input from '../../components/form/input'
import SubmitButton from '../../components/form/submitButton'
import { Link } from 'react-router-dom';
import hamburgreenLogo from '../../img/hamburgreen-logo.png';

function Login() {
    return (
        <form className='login'>
            <img className='imgLogin' alt="Logo Hamburgreen" src={hamburgreenLogo} />
            <h1 className='tittle'>Login</h1>
            <Input
                type="email"
                id="email"
                placeholder=" E-mail"
                name="email"
            />
            <Input
                type="password"
                id="password"
                placeholder=" Senha"
                name="password"
            />
            <div className='loginbtn'>
            <Select name="cargo" text="Cargo" />
            <SubmitButton type="submit" text="Entrar" />
            </div>
            <span className='noSignUp'>Não possui cadastro? <Link className='signUp' to="signup/"> Cadastre-se</Link></span>
            
        </form >
    )
}

export default Login;