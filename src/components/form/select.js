function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div>
            <select className="selectSignup" name={name} id={name}>
                <option value="" disabled selected>Cargo</option>
                <option value="garçom">Garçom</option>
                <option value="chefe">Chefe</option>
            </select>
        </div>
    )
}

export default Select;