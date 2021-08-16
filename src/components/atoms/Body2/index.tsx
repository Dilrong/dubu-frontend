import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Body2: React.FC<TextStylesProps> = ({ children }) => (
  <div className="Body2">{children}</div>
);

export default Body2;
