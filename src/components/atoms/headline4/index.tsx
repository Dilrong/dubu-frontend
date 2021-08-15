import React from "react";
import { TextStylesProps } from "../../types/textStylesProps";

import "./index.css";

const Headline4: React.FC<TextStylesProps> = ({ children }) => (
  <h4 className="Headline4">{children}</h4>
);

export default Headline4;
