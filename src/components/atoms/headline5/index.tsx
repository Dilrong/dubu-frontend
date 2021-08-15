import React from "react";
import { TextStylesProps } from "../../types/textStylesProps";

import "./index.css";

const Headline5: React.FC<TextStylesProps> = ({ children }) => (
  <h5 className="Headline5">{children}</h5>
);

export default Headline5;
