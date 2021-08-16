import React from "react";
import Headline4 from "../../atoms/Headline4";
import Body1 from "../../atoms/Body1";
import Button from "../../atoms/Button";

import "./index.css";

const ConnectWalletCard: React.FC = () => {
  return (
    <div className="card">
      <img src="/assets/pot.png" alt="logo" width="150" height="130" />
      <Headline4>Connect Wallet</Headline4>
      <Body1>Connect your wallet to join a Dubupot.</Body1>
      <br />
      <Button label="Connect Wallet" />
    </div>
  );
};

export default ConnectWalletCard;
