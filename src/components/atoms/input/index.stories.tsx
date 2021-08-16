import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from ".";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Placeholder",
};

export const medium = Template.bind({});
medium.args = {
  label: "Placeholder",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Placeholder",
};
