import React from "react";
import Button from "../../atoms/Button";
import Headline5 from "../../atoms/Headline5";
import SocialIcons from "../../molecules/SocialIcons";
import { useHistory } from "react-router-dom";

import "./index.css";
import TextCard from "../../organisms/TextCard";
import IoPotCard from "../../organisms/IoPotCard";

const Pot: React.FC = () => {
  let history = useHistory();

  return (
    <>
      <div className="head-container">
        <Headline5>
          Deposit crypto, earn interest and a chance to win $531,900
        </Headline5>
      </div>
      <div className="list-container"></div>
      <IoPotCard />
      <SocialIcons />
    </>
  );
};

export default Pot;
