import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Body1: React.FC<TextStylesProps> = ({ children }) => (
  <div className="Body1">{children}</div>
);

export default Body1;
