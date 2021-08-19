import React from "react";
import Headline5 from "../../atoms/Headline5";
import SocialIcons from "../../molecules/SocialIcons";

import "./index.css";
import IoPotCard from "../../organisms/IoPotCard";

const Pot: React.FC = () => {
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
