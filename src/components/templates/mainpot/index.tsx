import React from "react";
import Headline5 from "../../atoms/Headline5";
import SocialIcons from "../../molecules/SocialIcons";
import TvlBanner from "../../molecules/TvlBanner";
import PotCard from "../../organisms/PotCard";

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
