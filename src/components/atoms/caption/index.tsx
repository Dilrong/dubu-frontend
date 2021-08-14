import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Caption: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Caption">{children}</h1>
);

export default Caption;
