import classnames from "classnames";
import React from "react";

function TextFildIndput({
  lblText,
  type,
  name,
  className,
  id,
  placeholder,
  value,
  onChange,
  required,
  error,
  infoText,
}) {
  return (
    <div>
      <div className="mb-3">
        {lblText && (
          <label htmlFor={id} className="form-label">
            {lblText}
          </label>
        )}
        <input
          type={type}
          name={name}
          className={classnames(className, {
            "is-invalid": error,
          })}
          id={id}
          placeholder={placeholder}
          aria-describedby="emailHelp"
          value={value}
          onChange={onChange}
          required={required}
        />

        <div id="emailHelp" className="form-text">
          {infoText}
        </div>
        {error && (
          <div className="invalid-feedback">
            <i className="fas fa-exclamation-triangle text-danger"></i> {error}
          </div>
        )}
        <div className="valid-feedback">
          <i className="far fa-thumbs-up text-sccess"></i>Good
        </div>
      </div>
    </div>
  );
}

export default TextFildIndput;
