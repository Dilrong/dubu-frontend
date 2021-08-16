import React from "react";
import Headline4 from "../../atoms/Headline4";
import Body1 from "../../atoms/Body1";
import Button from "../../atoms/Button";

import "./index.css";
import { TextCardProps } from "../../types/TextCardProps";

const TextCard: React.FC<TextCardProps> = ({
  img,
  title,
  body,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className="card">
      <img src={img} alt="cardImage" width="150" height="130" />
      <Headline4>{title}</Headline4>
      <Body1>{body}</Body1>
      <br />
      <Button label={buttonLabel} onClick={onClick} />
    </div>
  );
};

export default TextCard;
