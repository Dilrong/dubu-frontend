import React from "react";
import { storiesOf } from "@storybook/react";

import TextCard from ".";

storiesOf("Molecules/TextCard", module).add("default", () => (
  <TextCard
    img="/assets/pot.png"
    title="Title"
    body="body"
    buttonLabel="button"
  />
));
