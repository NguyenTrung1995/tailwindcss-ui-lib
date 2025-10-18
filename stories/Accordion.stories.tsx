import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@app/_ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is single mode?</AccordionTrigger>
        <AccordionContent>
          In single mode, only one accordion item can be open at a time. Opening
          a new item will automatically close the previously opened item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I close the open item?</AccordionTrigger>
        <AccordionContent>
          Yes, when collapsible is true, you can click the open item trigger to
          close it.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What happens when I open this?</AccordionTrigger>
        <AccordionContent>
          The previously open item will automatically close, and this item will
          open.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is multiple mode?</AccordionTrigger>
        <AccordionContent>
          In multiple mode, you can have multiple accordion items open at the
          same time. Each item operates independently.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I open all items?</AccordionTrigger>
        <AccordionContent>
          Yes! You can open as many items as you want. They will all stay open
          until you manually close them.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I close items?</AccordionTrigger>
        <AccordionContent>
          Simply click on the trigger of any open item to close it. Other items
          will remain in their current state.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Short content</AccordionTrigger>
        <AccordionContent>This is a short piece of content.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Long content</AccordionTrigger>
        <AccordionContent>
          This is a much longer piece of content that demonstrates how the
          accordion handles varying content lengths. The accordion will smoothly
          animate to accommodate the content size, providing a pleasant user
          experience. You can include multiple paragraphs, lists, or any other
          content you need.
          <br />
          <br />
          The animation is handled automatically through CSS transitions and
          works seamlessly regardless of the content length. This makes it
          perfect for FAQs, documentation, or any scenario where you need to
          display expandable content sections.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another short one</AccordionTrigger>
        <AccordionContent>Back to short content.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
