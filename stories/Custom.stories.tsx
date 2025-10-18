import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { StyledAbc } from "@app/_ui/custom";

const meta: Meta<typeof StyledAbc> = {
  title: "UI/Custom",
  component: StyledAbc,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};