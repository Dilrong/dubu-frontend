import React from "react";
import Headline5 from "../../atoms/headline5";
import TvlBanner from "../../molecules/tvlBanner";
import PotCard from "../../organisms/potcard";

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
  </div>
);

export default MainPot;
