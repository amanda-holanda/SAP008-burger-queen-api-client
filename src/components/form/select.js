function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div>
            <select name={name} id={name}>
                <option disabled selected>Cargo</option>
                
            </select>
        </div>

    )
}

export default Select;