import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@app/_ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/_ui/card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description. Add some descriptive text here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. This is the main content area.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>
          This card has an action button in the header.
        </CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>The action button is positioned in the top-right corner.</p>
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>A simple card with just content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="border-b">
        <CardTitle>Bordered Header</CardTitle>
        <CardDescription>This header has a bottom border.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with a separated header section.</p>
      </CardContent>
      <CardFooter className="border-t">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  ),
};
