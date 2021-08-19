import React from "react";
import Button from "../../atoms/Button";
import Headline5 from "../../atoms/Headline5";
import SocialIcons from "../../molecules/SocialIcons";
import { useHistory } from "react-router-dom";

import "./index.css";
import TextCard from "../../organisms/TextCard";

const MyPastPot: React.FC = () => {
  let history = useHistory();

  return (
    <>
      <div className="head-container">
        <Headline5>
          Deposit crypto, earn interest and a chance to win $531,900
        </Headline5>
      </div>
      <div className="tab-container">
        <div className="tab-item">
          <Button
            label="My Active Pots"
            fill={false}
            onClick={() => {
              history.push("/my-dubupots");
            }}
          />
        </div>
        <div className="tab-item">
          <Button label="My Past Pots" />
        </div>
      </div>
      <div className="list-container">
        <TextCard
          img="/assets/pot.png"
          title="Connect Wallet"
          body="Connect your wallet to join a Moonpot."
          buttonLabel="Connect Wallet"
        />
      </div>
      <SocialIcons />
    </>
  );
};

export default MyPastPot;
