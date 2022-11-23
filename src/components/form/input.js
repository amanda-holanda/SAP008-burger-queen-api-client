function Input({type, name, placeholder,handleOnChange, value}) {
    return (
        <div>
            <label htmlFor={name}>
                <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}                
                 />
            </label>
        </div>
    )
}

export default Input;