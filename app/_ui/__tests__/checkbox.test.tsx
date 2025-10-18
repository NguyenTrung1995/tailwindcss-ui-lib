import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Checkbox } from "../checkbox";

describe("Checkbox", () => {
  it("should render successfully", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("should be checked when defaultChecked is true", () => {
    render(<Checkbox defaultChecked />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("should toggle checked state when clicked", async () => {
    const user = userEvent.setup();
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("should not be clickable when disabled", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox disabled onCheckedChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("should call onCheckedChange when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox onCheckedChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("should apply custom className", () => {
    render(<Checkbox className="custom-checkbox" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("custom-checkbox");
  });

  it("should have data-slot attribute", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("data-slot", "checkbox");
  });

  it("should accept id prop", () => {
    render(<Checkbox id="test-checkbox" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("id", "test-checkbox");
  });

  it("should support controlled mode", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { rerender } = render(
      <Checkbox checked={false} onCheckedChange={handleChange} />,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);

    // Simulate parent updating the checked state
    rerender(<Checkbox checked={true} onCheckedChange={handleChange} />);
    expect(checkbox).toBeChecked();
  });
});
