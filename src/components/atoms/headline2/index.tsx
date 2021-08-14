import React from "react";
import { TextStylesProps } from "../../types/textStylesProps";

import "./index.css";

const Headline2: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="headline2">{children}</h1>
);

export default Headline2;
