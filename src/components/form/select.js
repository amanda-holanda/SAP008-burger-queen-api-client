function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div>
            <select name={name} id={name}>
                <option value="">Cargo</option>
                <option value="garçom">Garçom</option>
                <option value="chefe">Chefe</option>
            </select>
        </div>

    )
}

export default Select;