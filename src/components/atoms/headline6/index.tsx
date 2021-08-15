import React from "react";
import { TextStylesProps } from "../../types/textStylesProps";

import "./index.css";

const Headline6: React.FC<TextStylesProps> = ({ children }) => (
  <div className="Headline6">{children}</div>
);

export default Headline6;
