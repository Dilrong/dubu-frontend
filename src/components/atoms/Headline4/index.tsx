import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Headline4: React.FC<TextStylesProps> = ({ children, color }) => (
  <h4 className="Headline4" style={{ color }}>
    {children}
  </h4>
);

export default Headline4;
