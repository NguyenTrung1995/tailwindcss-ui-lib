import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TreeMenu } from "@app/_ui/menu-tree";

const meta: Meta<typeof TreeMenu> = {
  title: "UI/TreeMenu",
  component: TreeMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TreeMenu />,
};
