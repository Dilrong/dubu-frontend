import React from "react";
import { TextStylesProps } from "../../types/textStylesProps";

import "./index.css";

const Headline3: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Headline3">{children}</h1>
);

export default Headline3;
