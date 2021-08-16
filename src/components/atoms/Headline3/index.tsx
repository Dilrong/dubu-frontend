import React from "react";
import { TextStylesProps } from "../../types/TextStylesProps";

import "./index.css";

const Headline3: React.FC<TextStylesProps> = ({ children }) => (
  <h3 className="Headline3">{children}</h3>
);

export default Headline3;
