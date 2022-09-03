import { ComponentStory, ComponentMeta } from "@storybook/react";
import LogoIcon from "./index";

export default {
  title: "Design System/Atoms/LogoIcon",
  component: LogoIcon,
} as ComponentMeta<typeof LogoIcon>;

const Template: ComponentStory<typeof LogoIcon> = (args) => (
  <LogoIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export const SpecifySize = Template.bind({});

SpecifySize.args = {
  width: 64,
  height: 64,
};
