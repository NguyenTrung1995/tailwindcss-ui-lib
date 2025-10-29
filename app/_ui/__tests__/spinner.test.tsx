import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Spinner } from "../spinner";

describe("Spinner", () => {
  it("should render successfully", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("should have correct aria-label", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveAttribute("aria-label", "Loading");
  });

  it("should apply default classes", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("size-4");
    expect(spinner).toHaveClass("animate-spin");
  });

  it("should apply custom className", () => {
    render(<Spinner className="size-8 text-blue-500" />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("size-8");
    expect(spinner).toHaveClass("text-blue-500");
    expect(spinner).toHaveClass("animate-spin");
  });

  it("should accept additional props", () => {
    render(<Spinner data-testid="custom-spinner" />);
    const spinner = screen.getByTestId("custom-spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("should render as svg element", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner.tagName.toLowerCase()).toBe("svg");
  });

  it("should override default size with custom className", () => {
    render(<Spinner className="size-12" />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("size-12");
    expect(spinner).not.toHaveClass("size-4");
  });
});
