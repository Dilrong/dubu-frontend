import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Overline: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Overline">{children}</h1>
);

export default Overline;
