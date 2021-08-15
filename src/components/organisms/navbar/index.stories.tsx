import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from ".";

export default {
  title: "Organisms/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const isConnected = Template.bind({});
isConnected.args = {
  isConnected: true,
};
