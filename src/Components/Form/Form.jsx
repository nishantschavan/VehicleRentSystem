import React from "react";
import "./form.scss";
const Form = (props) => {
  const { formLabel, error, onSubmit } = props;
  return (
    <form className="form-container" onSubmit={(e) => onSubmit(e)}>
      {formLabel.map(
        ({ label, name, type, placeholder, value, optional, ...restProps }) => (
          <div className="form-control">
            <label className="login-labels">
              {label}
              {!optional && label ? "*" : ""}
            </label>

            <input
              className={`form-input ${type === "submit" ? "submit-btn" : ""}`}
              name={name}
              type={type}
              placeholder={placeholder}
              value={value ? value : null}
              required={!optional}
              onChange={(e) => {
                restProps.handleChange(e.target);
              }}
            />
          </div>
        )
      )}
    </form>
  );
};

export default Form;
