import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Headline5: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Headline5">{children}</h1>
);

export default Headline5;
