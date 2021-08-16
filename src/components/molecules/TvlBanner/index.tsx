import React from "react";
import Caption from "../../atoms/Caption";
import Headline4 from "../../atoms/Headline4";

import "./index.css";

const TvlBanner: React.FC = () => {
  return (
    <div className="banner">
      <Caption>TOTAL DEPOSITES</Caption>
      <Headline4 color="#94cae0">$44,477,520</Headline4>
    </div>
  );
};

export default TvlBanner;
