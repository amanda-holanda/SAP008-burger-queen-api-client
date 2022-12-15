function SubmitButton({ type, text }) {
    return (
        <div>
            <button className="submitButton" type={type}>{text}</button>
        </div>
    )
}

export default SubmitButton;