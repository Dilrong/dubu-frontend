import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Headline1: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="headline1">{children}</h1>
);

export default Headline1;
