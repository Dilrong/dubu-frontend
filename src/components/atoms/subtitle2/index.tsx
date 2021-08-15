import React from "react";
import { TextStylesProps } from "../../types/textStylesProps";

import "./index.css";

const Subtitle2: React.FC<TextStylesProps> = ({ children }) => (
  <div className="Subtitle2">{children}</div>
);

export default Subtitle2;
