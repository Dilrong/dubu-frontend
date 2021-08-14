import React from "react";
import { TextStylesProps } from "../../types/textStylesProps";

import "./index.css";

const Subtitle1: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Subtitle1">{children}</h1>
);

export default Subtitle1;
