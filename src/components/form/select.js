function Select({ text, name, options, handleOnChange, value }) {
    return (
        <select className="selectSignup" name={name} id={name}>
            <option disabled selected>Cargo</option>
        </select>
    )
}

export default Select;