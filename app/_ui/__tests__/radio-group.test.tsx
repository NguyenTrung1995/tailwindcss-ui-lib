import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";

describe("RadioGroup", () => {
  it("should render successfully", () => {
    render(
      <RadioGroup>
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
      </RadioGroup>,
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("should render all radio items", () => {
    render(
      <RadioGroup>
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div>
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
        <div>
          <RadioGroupItem value="option3" id="option3" />
          <Label htmlFor="option3">Option 3</Label>
        </div>
      </RadioGroup>,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
  });

  it("should select radio when clicked", async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup>
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div>
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>,
    );

    const radio1 = screen.getByLabelText("Option 1");
    const radio2 = screen.getByLabelText("Option 2");

    await user.click(radio1);
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();

    await user.click(radio2);
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });

  it("should have default value", () => {
    render(
      <RadioGroup defaultValue="option2">
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div>
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>,
    );

    const radio1 = screen.getByLabelText("Option 1");
    const radio2 = screen.getByLabelText("Option 2");

    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });

  it("should call onValueChange when selection changes", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <RadioGroup onValueChange={handleChange}>
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div>
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>,
    );

    const radio1 = screen.getByLabelText("Option 1");
    await user.click(radio1);

    expect(handleChange).toHaveBeenCalledWith("option1");
  });

  it("should disable radio items when disabled prop is true", () => {
    render(
      <RadioGroup>
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div>
          <RadioGroupItem value="option2" id="option2" disabled />
          <Label htmlFor="option2">Option 2 (Disabled)</Label>
        </div>
      </RadioGroup>,
    );

    const radio1 = screen.getByLabelText("Option 1");
    const radio2 = screen.getByLabelText("Option 2 (Disabled)");

    expect(radio1).not.toBeDisabled();
    expect(radio2).toBeDisabled();
  });

  it("should not allow selecting disabled radio", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <RadioGroup onValueChange={handleChange}>
        <div>
          <RadioGroupItem value="option1" id="option1" disabled />
          <Label htmlFor="option1">Option 1 (Disabled)</Label>
        </div>
      </RadioGroup>,
    );

    const radio1 = screen.getByLabelText("Option 1 (Disabled)");
    await user.click(radio1);

    expect(handleChange).not.toHaveBeenCalled();
    expect(radio1).not.toBeChecked();
  });

  it("should apply custom className to RadioGroup", () => {
    render(
      <RadioGroup className="custom-radio-group">
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole("radiogroup");
    expect(radioGroup).toHaveClass("custom-radio-group");
  });

  it("should apply custom className to RadioGroupItem", () => {
    render(
      <RadioGroup>
        <div>
          <RadioGroupItem
            value="option1"
            id="option1"
            className="custom-radio-item"
          />
          <Label htmlFor="option1">Option 1</Label>
        </div>
      </RadioGroup>,
    );

    const radio = screen.getByRole("radio");
    expect(radio).toHaveClass("custom-radio-item");
  });

  it("should have data-slot attributes", () => {
    render(
      <RadioGroup>
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole("radiogroup");
    const radio = screen.getByRole("radio");

    expect(radioGroup).toHaveAttribute("data-slot", "radio-group");
    expect(radio).toHaveAttribute("data-slot", "radio-group-item");
  });
});
