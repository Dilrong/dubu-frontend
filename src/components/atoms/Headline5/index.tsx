import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Headline5: React.FC<TextStylesProps> = ({ children, color }) => (
  <h5 className="Headline5" style={{ color }}>
    {children}
  </h5>
);

export default Headline5;
