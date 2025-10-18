import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

describe("Accordion", () => {
  const AccordionExample = () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>Content 3</AccordionContent>
      </AccordionItem>
    </Accordion>
  );

  it("should render successfully", () => {
    render(<AccordionExample />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("should expand item when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<AccordionExample />);

    const trigger1 = screen.getByText("Item 1");
    await user.click(trigger1);

    const content1 = screen.getByText("Content 1");
    expect(content1).toBeVisible();
  });

  it("should collapse item when trigger is clicked again in single mode", async () => {
    const user = userEvent.setup();
    const { container } = render(<AccordionExample />);

    const trigger1 = screen.getByText("Item 1");

    // Expand
    await user.click(trigger1);
    let contentDiv = container.querySelector('[data-state="open"]');
    expect(contentDiv).toBeInTheDocument();

    // Collapse
    await user.click(trigger1);
    // Content should be in closed state
    contentDiv = container.querySelector('[data-state="open"]');
    expect(contentDiv).not.toBeInTheDocument();
  });

  it("should only allow one item open at a time in single mode", async () => {
    const user = userEvent.setup();
    render(<AccordionExample />);

    const trigger1 = screen.getByText("Item 1");
    const trigger2 = screen.getByText("Item 2");

    // Open item 1
    await user.click(trigger1);
    const content1 = screen.getByText("Content 1");
    expect(content1).toBeVisible();

    // Open item 2 - this should close item 1
    await user.click(trigger2);
    const content2 = screen.getByText("Content 2");
    expect(content2).toBeVisible();

    // Verify item 1 is no longer visible
    expect(content1).not.toBeVisible();
  });

  it("should allow multiple items open in multiple mode", async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger1 = screen.getByText("Item 1");
    const trigger2 = screen.getByText("Item 2");

    await user.click(trigger1);
    await user.click(trigger2);

    const content1 = screen.getByText("Content 1");
    const content2 = screen.getByText("Content 2");

    expect(content1).toBeVisible();
    expect(content2).toBeVisible();
  });

  it("should have default value", () => {
    render(
      <Accordion type="single" defaultValue="item-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const content2 = screen.getByText("Content 2");
    expect(content2).toBeVisible();
  });

  it("should call onValueChange when item is toggled", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Accordion type="single" collapsible onValueChange={handleChange}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger1 = screen.getByText("Item 1");
    await user.click(trigger1);

    expect(handleChange).toHaveBeenCalledWith("item-1");
  });

  it("should apply custom className to Accordion", () => {
    const { container } = render(
      <Accordion type="single" className="custom-accordion">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const accordion = container.querySelector('[data-slot="accordion"]');
    expect(accordion).toHaveClass("custom-accordion");
  });

  it("should apply custom className to AccordionItem", () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="item-1" className="custom-item">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const item = container.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveClass("custom-item");
  });

  it("should apply custom className to AccordionTrigger", () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger className="custom-trigger">Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = container.querySelector('[data-slot="accordion-trigger"]');
    expect(trigger).toHaveClass("custom-trigger");
  });

  it("should apply custom className to AccordionContent", () => {
    const { container } = render(
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent className="custom-content">
            <div>Content 1</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // The custom class is applied to the inner div, not the content wrapper
    const innerDiv = container.querySelector(".custom-content");
    expect(innerDiv).toBeInTheDocument();
    expect(innerDiv).toHaveClass("custom-content");
  });

  it("should have data-slot attributes", () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(
      container.querySelector('[data-slot="accordion"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="accordion-item"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="accordion-trigger"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="accordion-content"]'),
    ).toBeInTheDocument();
  });

  it("should render chevron icon in trigger", () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = container.querySelector('[data-slot="accordion-trigger"]');
    const icon = trigger?.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("should disable item when disabled prop is true", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1" disabled>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByText("Item 1");
    expect(trigger).toBeDisabled();
  });
});
