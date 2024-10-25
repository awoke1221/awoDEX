const FormRow = ({ type, name, labeltext, register, error }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labeltext || name}
      </label>
      <input
        type={type}
        id={name}
        {...register} // Attach the register function here
        className="form-input"
      />
      {error && <p className="error-text">{error.message}</p>}{" "}
    </div>
  );
};

export default FormRow;
