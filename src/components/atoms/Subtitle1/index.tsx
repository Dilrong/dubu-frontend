import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Subtitle1: React.FC<TextStylesProps> = ({ children, color }) => (
  <h1 className="Subtitle1" style={{ color }}>
    {children}
  </h1>
);

export default Subtitle1;
