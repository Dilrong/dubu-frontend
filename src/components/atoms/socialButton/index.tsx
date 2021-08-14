import React from "react";
import { socialButtonProps } from "../../types/socialButtonProps";

import "./index.css";

const SocialButton: React.FC<socialButtonProps> = ({ herf, src, alt }) => (
  <a className="SocialButton" href={herf}>
    <img src={src} alt={alt} />
  </a>
);

export default SocialButton;
