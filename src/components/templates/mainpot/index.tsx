import React from "react";
import Headline5 from "../../atoms/headline5";
import SocialIcons from "../../molecules/socialIcons";
import TvlBanner from "../../molecules/tvlBanner";
import PotCard from "../../organisms/potCard";

import "./index.css";

const MainPot: React.FC = () => (
  <div>
    <div className="head-container">
      <Headline5>
        Deposit crypto, earn interest and a chance to win $531,900
      </Headline5>
      <TvlBanner />
    </div>
    <PotCard />
    <SocialIcons />
  </div>
);

export default MainPot;
