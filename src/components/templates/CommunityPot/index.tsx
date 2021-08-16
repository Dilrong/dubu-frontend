import React from "react";
import Button from "../../atoms/Button";
import Headline5 from "../../atoms/Headline5";
import SocialIcons from "../../molecules/SocialIcons";
import TvlBanner from "../../molecules/TvlBanner";
import TextCard from "../../organisms/TextCard";

import "./index.css";

const CommunityPot: React.FC = () => (
  <>
    <div className="head-container">
      <Headline5>
        Deposit crypto, earn interest and a chance to win $531,900
      </Headline5>
      <TvlBanner />
    </div>
    <div className="tab-container">
      <div className="tab-item">
        <Button label="Main Pots" fill={false} />
      </div>
      <div className="tab-item">
        <Button label="Community Pots" />
      </div>
    </div>
    <div className="sns-container">
      <TextCard
        img="/assets/telegram.svg"
        width={75}
        height={75}
        title="Telegram"
        body="Learn about Dubupot and get direct support 
from the community"
        buttonLabel="Join our Telegram"
      />
      <TextCard
        img="/assets/discord.svg"
        width={75}
        height={75}
        title="Discord"
        body="Joim the conversation with our active
        community of developers"
        buttonLabel="Join our Discord"
      />
      <TextCard
        img="/assets/twitter.svg"
        width={75}
        height={75}
        title="Twitter"
        body="Get the latest updates and take part in social media giveaways"
        buttonLabel="Follow our Twitter"
      />
    </div>
    <SocialIcons />
  </>
);

export default CommunityPot;
