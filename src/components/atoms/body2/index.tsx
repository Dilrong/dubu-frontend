import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Body2: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Body2">{children}</h1>
);

export default Body2;
