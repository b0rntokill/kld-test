import React, { InputHTMLAttributes } from "react";
import "./custom-input.scss";

type CustomInputProps = {
  label?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

function CustomInput({ label, error, ...otherProps }: CustomInputProps): JSX.Element {
  return (
    <div className="custom-input">
      {label ? <label>{label}</label> : ""}
      <input
        className={`custom-input__input ${error ? "custom-input__input--error" : ""}`}
        {...otherProps}
      />
    </div>
  );
}

export default CustomInput;
