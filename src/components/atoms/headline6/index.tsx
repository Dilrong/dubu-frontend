import React from "react";
import { TextStylesProps } from "../../types/textStylesProps";

import "./index.css";

const Headline6: React.FC<TextStylesProps> = ({ children }) => (
  <h6 className="Headline6">{children}</h6>
);

export default Headline6;
