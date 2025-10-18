import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "@app/_ui/checkbox";
import { Label } from "@app/_ui/label";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Already checked</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled unchecked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled checked</Label>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms1">Accept terms and conditions</Label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" defaultChecked />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option4" defaultChecked />
        <Label htmlFor="option4">Option 4</Label>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-3 text-sm font-medium">Email Preferences</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" defaultChecked />
            <Label htmlFor="marketing">Marketing emails</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="updates" defaultChecked />
            <Label htmlFor="updates">Product updates</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="security" defaultChecked />
            <Label htmlFor="security">Security alerts</Label>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="items-top flex space-x-2">
        <Checkbox id="notifications" defaultChecked />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="notifications">Push Notifications</Label>
          <p className="text-sm text-muted-foreground">
            Receive push notifications about your account activity.
          </p>
        </div>
      </div>
      <div className="items-top flex space-x-2">
        <Checkbox id="email-notif" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="email-notif">Email Notifications</Label>
          <p className="text-sm text-muted-foreground">
            Get email notifications for important updates.
          </p>
        </div>
      </div>
      <div className="items-top flex space-x-2">
        <Checkbox id="newsletter" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="newsletter">Newsletter</Label>
          <p className="text-sm text-muted-foreground">
            Subscribe to our weekly newsletter with tips and news.
          </p>
        </div>
      </div>
    </div>
  ),
};
