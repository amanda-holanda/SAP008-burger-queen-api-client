function SubmitButton({ type, text }) {
  return (
    <button className="submitButton" type={type}>
      {text}
    </button>
  );
}

export default SubmitButton;
