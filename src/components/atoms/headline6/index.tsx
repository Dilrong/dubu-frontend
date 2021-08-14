import React from "react";
import { TextStylesProps } from "../types/headline";

import "./index.css";

const Headline6: React.FC<TextStylesProps> = ({ children }) => (
  <h1 className="Headline6">{children}</h1>
);

export default Headline6;
