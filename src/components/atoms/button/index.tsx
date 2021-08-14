import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Button: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Button">{children}</h1>
);

export default Button;
