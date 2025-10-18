import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "@app/_ui/label";
import { RadioGroup, RadioGroupItem } from "@app/_ui/radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" disabled />
        <Label htmlFor="r3">Compact (Disabled)</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="flex gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="card" id="h-card" />
        <Label htmlFor="h-card">Card</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="h-paypal" />
        <Label htmlFor="h-paypal">PayPal</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="apple" id="h-apple" />
        <Label htmlFor="h-apple">Apple Pay</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="standard" className="w-[400px]">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="free" id="free" className="mt-1" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="free">Free</Label>
          <p className="text-sm text-muted-foreground">
            Best for personal use and small projects.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="standard" id="standard" className="mt-1" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="standard">Standard</Label>
          <p className="text-sm text-muted-foreground">
            Perfect for small teams and growing businesses.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="premium" id="premium" className="mt-1" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="premium">Premium</Label>
          <p className="text-sm text-muted-foreground">
            Advanced features for large organizations.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-3 text-sm font-medium">Notification Settings</h3>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mentions" id="mentions" />
            <Label htmlFor="mentions">Mentions only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="none" />
            <Label htmlFor="none">None</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};
