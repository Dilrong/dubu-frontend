import React from "react";
import { SocialButtonProps } from "../../types/SocialButtonProps";

import "./index.css";

const SocialButton: React.FC<SocialButtonProps> = ({ herf, src, alt }) => (
  <a className="SocialButton" href={herf}>
    <img src={src} alt={alt} />
  </a>
);

export default SocialButton;
