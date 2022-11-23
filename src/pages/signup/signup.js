import Select from '../../components/form/select'
import Input from '../../components/form/input'
import SubmitButton from '../../components/form/submitButton'
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <form>
            <h1>Cadastro</h1>
            <Link to="/">Voltar</Link>
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
    )
}

export default Signup;