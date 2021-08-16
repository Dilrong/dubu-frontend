import React from "react";
import { InputProps } from "../../types/InputProps";

import "./index.css";

const Input: React.FC<InputProps> = ({ label, type, id, size = "medium" }) => (
  <form>
    <input
      className={["input", `input--${size}`].join(" ")}
      type={type}
      id={id}
      name={id}
      placeholder={label}
    />
  </form>
);

export default Input;
