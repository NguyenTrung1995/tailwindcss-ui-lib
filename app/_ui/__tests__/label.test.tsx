import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "../label";

describe("Label", () => {
  it("should render successfully", () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    render(<Label className="custom-class">Test Label</Label>);
    const label = screen.getByText("Test Label");
    expect(label).toHaveClass("custom-class");
  });

  it("should render with htmlFor attribute", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const label = screen.getByText("Test Label");
    expect(label).toHaveAttribute("for", "test-input");
  });

  it("should render children correctly", () => {
    render(
      <Label>
        <span>Child 1</span>
        <span>Child 2</span>
      </Label>,
    );
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("should have data-slot attribute", () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText("Test Label");
    expect(label).toHaveAttribute("data-slot", "label");
  });

  it("should merge className with default classes", () => {
    render(<Label className="text-lg">Test Label</Label>);
    const label = screen.getByText("Test Label");
    expect(label).toHaveClass("text-lg");
    // text-lg overrides text-sm in Tailwind merge
    expect(label).toHaveClass("font-medium"); // default class that should still be present
  });
});
