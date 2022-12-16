function Input({ type, name, placeholder, onChange, value }) {
    return (
        <label htmlFor={name}>
            <input
                className="inputSignup"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </label>
    )
}

export default Input;