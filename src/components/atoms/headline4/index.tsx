import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Headline4: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Headline4">{children}</h1>
);

export default Headline4;
