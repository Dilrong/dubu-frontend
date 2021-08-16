import React from "react";
import Button from "../../atoms/Button";
import Caption from "../../atoms/Caption";
import Headline6 from "../../atoms/Headline6";
import Input from "../../atoms/Input";
import Subtitle1 from "../../atoms/Subtitle1";

import "./index.css";

const IoPotCard: React.FC = () => {
  return (
    <div className="grid-card">
      <div className="grid-container">
        <div className="grid-item-left">
          <img src="/logo192.png" alt="logo" width="90" height="90" />
        </div>
        <div className="grid-item-right">
          <Subtitle1>Dubu Pot</Subtitle1>
          <Headline6>Win $360,824</Headline6>
          <Caption>in CAKE & POTS</Caption>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item-left">
          <Caption>NEXT DRAW</Caption>
          <Subtitle1>21d 23h 52m</Subtitle1>
        </div>
        <div className="grid-item-right">
          <Caption>INTEREST</Caption>
          <Subtitle1>204.80% APY</Subtitle1>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item-left">
          <Caption>TVL</Caption>
          <Subtitle1>$9.65M</Subtitle1>
        </div>
      </div>
      <hr />
      <div className="grid-container">
        <div className="grid-item-left">
          <Caption>PRIZE SPLIT</Caption>
          <Subtitle1>10 Winners</Subtitle1>
        </div>
        <div className="grid-item-right">
          <Caption>
            4384.18 POTS, 75.00 CAKE, 437.50 DODO & 0.51 BIFI each
          </Caption>
        </div>
      </div>
      <div className="grid-item-center">
        <Input label="Enter Pots amount" type="text" id="deposit" />
        <br />
        <Button label="Deposit" />
        <Caption>
          There’s a 10 day Fairplay Timelock. If you want to unstaking earlier
          you’ll pay a 2.5%, or less, Fairness Fee. The fee reduces every
          second.
        </Caption>
      </div>
      <hr />
    </div>
  );
};

export default IoPotCard;
