import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Overline: React.FC<TextStylesProps> = ({ children }) => (
  <div className="Overline">{children}</div>
);

export default Overline;
