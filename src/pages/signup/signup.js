function Signup() {
    return (
        <div>
            <form>
                <h1>Cadastro</h1>
                <button type="button">Voltar</button>
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