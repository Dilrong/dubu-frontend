import { storiesOf } from "@storybook/react";

import SocialButton from ".";

storiesOf("Atoms/SocialButton", module).add("github", () => (
  <SocialButton herf="#" src="/assets/github.svg" alt="github" />
));

storiesOf("Atoms/SocialButton", module).add("discord", () => (
  <SocialButton herf="#" src="/assets/discord.svg" alt="discord" />
));

storiesOf("Atoms/SocialButton", module).add("telegram", () => (
  <SocialButton herf="#" src="/assets/telegram.svg" alt="telegram" />
));

storiesOf("Atoms/SocialButton", module).add("twitter", () => (
  <SocialButton herf="#" src="/assets/twitter.svg" alt="twitter" />
));
