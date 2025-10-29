import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Spinner } from "@app/_ui/spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the spinner",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    className: "size-3",
  },
};

export const Medium: Story = {
  args: {
    className: "size-6",
  },
};

export const Large: Story = {
  args: {
    className: "size-8",
  },
};

export const ExtraLarge: Story = {
  args: {
    className: "size-12",
  },
};

export const CustomColor: Story = {
  args: {
    className: "size-6 text-blue-500",
  },
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner />
      <span>Loading...</span>
    </div>
  ),
};
