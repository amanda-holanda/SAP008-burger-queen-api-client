function Input({ type, name, placeholder, handleOnChange, value }) {
    return (
        <label htmlFor={name}>
            <input
                className="inputSignup"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </label>
    )
}

export default Input;