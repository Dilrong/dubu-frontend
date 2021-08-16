import React from "react";
import Button from "../../atoms/Button";
import Headline5 from "../../atoms/Headline5";
import SocialIcons from "../../molecules/SocialIcons";
import TvlBanner from "../../molecules/TvlBanner";
import PotCard from "../../organisms/PotCard";

import "./index.css";

const MainPot: React.FC = () => (
  <>
    <div className="head-container">
      <Headline5>
        Deposit crypto, earn interest and a chance to win $531,900
      </Headline5>
      <TvlBanner />
    </div>
    <div className="tab-container">
      <div className="tab-item">
        <Button label="Main Pots" />
      </div>
      <div className="tab-item">
        <Button label="Community Pots" fill={false} />
      </div>
    </div>
    <div className="list-container">
      <PotCard />
    </div>
    <SocialIcons />
  </>
);

export default MainPot;
