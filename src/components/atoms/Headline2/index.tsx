import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Headline2: React.FC<TextStylesProps> = ({ children }) => (
  <h2 className="headline2">{children}</h2>
);

export default Headline2;
