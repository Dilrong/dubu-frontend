import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Body1: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Body1">{children}</h1>
);

export default Body1;
