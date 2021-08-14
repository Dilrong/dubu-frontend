import React from "react";
import { HeadlineProps } from "../types/headline";

import "./index.css";

const Headline1: React.FC<HeadlineProps> = ({ children }) => (
  <h1 className="headline1">{children}</h1>
);

export default Headline1;
