import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Headline6: React.FC<TextStylesProps> = ({ children, color }) => (
  <span className="Headline6" style={{ color }}>
    {children}
  </span>
);

export default Headline6;
