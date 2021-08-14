import React from "react";
import SocialButton from "../../atoms/socialButton";
import { socialButtonProps } from "../../types/socialButtonProps";

import "./index.css";

const SocialIcons: React.FC = () => {
  const socialArray: socialButtonProps[] = [
    {
      herf: "#",
      src: "/assets/github.svg",
      alt: "github",
    },
    {
      herf: "#",
      src: "/assets/telegram.svg",
      alt: "telegram",
    },
    {
      herf: "#",
      src: "/assets/discord.svg",
      alt: "discord",
    },
    {
      herf: "#",
      src: "/assets/twitter.svg",
      alt: "twitter",
    },
  ];
  return (
    <div className="SocialIcons">
      {socialArray.map((data) => (
        <SocialButton herf={data.herf} src={data.src} alt={data.alt} />
      ))}
    </div>
  );
};

export default SocialIcons;
