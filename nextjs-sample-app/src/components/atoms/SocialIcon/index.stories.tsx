import { ComponentStory, ComponentMeta } from "@storybook/react";
import SocialIcon from "./index";

export default {
  title: "Design System/Atoms/SocialIcon",
  component: SocialIcon,
} as ComponentMeta<typeof SocialIcon>;

const Template: ComponentStory<typeof SocialIcon> = (args) => (
  <SocialIcon {...args} />
);

export const Twitter = Template.bind({});

Twitter.args = {
  media: "twitter",
};

export const Facebook = Template.bind({});

Facebook.args = {
  media: "facebook",
};
