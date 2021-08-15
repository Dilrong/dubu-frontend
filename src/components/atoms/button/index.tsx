import React from "react";
import { ButtonProps } from "../../types/ButtonProps";

import "./index.css";

const Button: React.FC<ButtonProps> = ({
  fill = true,
  backgroundColor,
  size = "medium",
  label,
  onClick,
}) => {
  const mode = fill ? "button--fill" : "button--outline";
  return (
    // <h1 className="Button">{children}</h1>
    <button
      className={["button", `button--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <span className="text">{label}</span>
    </button>
  );
};

export default Button;
