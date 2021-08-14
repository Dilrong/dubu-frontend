import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Subtitle2: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Subtitle2">{children}</h1>
);

export default Subtitle2;
