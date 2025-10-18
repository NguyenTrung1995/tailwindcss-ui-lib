# Component Guidelines

## Props Type Declaration Pattern

When creating or refactoring components, follow this pattern for declaring component props:

### Pattern

Always extract component props into a separate type declaration instead of inline typing.

**Do this:**

```typescript
type ComponentNameProps = React.ComponentProps<typeof SomePrimitive.Root>;

const ComponentName = ({ className, ...props }: ComponentNameProps) => {
  // component implementation
};
```

**Don't do this:**

```typescript
function ComponentName({
  className,
  ...props
}: React.ComponentProps<typeof SomePrimitive.Root>) {
  // component implementation
}
```

### Benefits

- **Clarity**: Props type is clearly visible and named
- **Reusability**: Type can be exported and used elsewhere if needed
- **Maintainability**: Easier to extend or modify props in one place
- **Documentation**: Type name serves as self-documentation

### Example

See [app/\_ui/label.tsx](app/_ui/label.tsx) for a reference implementation:

```typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@app/lib/utils";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
```

### Naming Convention

- Type name should be: `{ComponentName}Props`
- Place type declaration immediately before the component function
- Maintain alphabetical order if multiple types are needed

---

## Storybook Files

When installing or creating a new component, **always create a corresponding Storybook file** to document and showcase the component.

### Pattern

1. Create a file in the `stories/` directory named `{ComponentName}.stories.tsx`
2. Follow the standard Storybook structure with meta configuration and story exports
3. Include all major variants and use cases of the component
4. Use the `UI/` prefix in the title for UI components

### Template

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ComponentName } from "@app/_ui/component-name";

const meta: Meta<typeof ComponentName> = {
  title: "UI/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Add argTypes for component props here
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};

// Add more story variants as needed
```

### Example

See [stories/Button.stories.tsx](stories/Button.stories.tsx) for a reference implementation with multiple variants.

### Best Practices

- **Coverage**: Include stories for all important prop combinations and variants
- **Naming**: Use descriptive names for stories (e.g., `Default`, `Secondary`, `Small`, `Large`)
- **ArgTypes**: Define argTypes with controls for interactive props (select, boolean, text, etc.)
- **Layout**: Use `layout: "centered"` for standalone components or adjust as needed
- **Tags**: Include `["autodocs"]` to auto-generate documentation

---

## Code Formatting

After installing and refactoring a component, **always run Prettier** to ensure consistent code formatting across the project.

### Pattern

Run Prettier after completing the following steps:
1. Installing a new component from Shadcn or other sources
2. Refactoring component to follow props type declaration pattern
3. Creating the corresponding Storybook file

### Command

```bash
npx prettier --write "app/_ui/**/*.tsx" "stories/**/*.tsx"
```

Or format specific files:

```bash
npx prettier --write app/_ui/component-name.tsx stories/ComponentName.stories.tsx
```

### Why Format?

- **Consistency**: Maintains uniform code style across all files
- **Readability**: Ensures proper spacing, indentation, and line breaks
- **Team Standards**: Aligns with project's Prettier configuration
- **Best Practice**: Formatting should be the final step before committing code

---

## Unit Testing

When creating or updating a component, **always write comprehensive unit tests** to ensure reliability and prevent regressions.

### Pattern

1. Create a test file in `app/_ui/__tests__/` directory named `{component-name}.test.tsx`
2. Use Vitest and React Testing Library for testing
3. Cover all major functionality, edge cases, and user interactions
4. Test accessibility features and proper DOM structure

### Test Structure

```typescript
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentName } from "../component-name";

describe("ComponentName", () => {
  it("should render successfully", () => {
    render(<ComponentName />);
    expect(screen.getByRole("role-name")).toBeInTheDocument();
  });

  it("should handle user interaction", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<ComponentName onClick={handleClick} />);
    const element = screen.getByRole("role-name");

    await user.click(element);
    expect(handleClick).toHaveBeenCalled();
  });

  // Add more tests for different scenarios
});
```

### What to Test

- **Rendering**: Component renders correctly with default props
- **Props**: Custom props are applied correctly (className, id, etc.)
- **User Interactions**: Click, type, focus, blur events work as expected
- **State Changes**: Component state updates correctly
- **Callbacks**: Event handlers are called with correct arguments
- **Accessibility**: Proper ARIA attributes and roles
- **Variants**: All variants and states (disabled, checked, error, etc.)
- **Edge Cases**: Empty states, invalid props, etc.

### Test Commands

```bash
# Run tests in watch mode
yarn test

# Run tests with UI
yarn test:ui

# Run tests with coverage report
yarn test:coverage
```

### Example

See test files in [app/_ui/__tests__/](app/_ui/__tests__/) for reference implementations:
- [label.test.tsx](app/_ui/__tests__/label.test.tsx) - Simple component testing
- [checkbox.test.tsx](app/_ui/__tests__/checkbox.test.tsx) - Interactive component with state
- [radio-group.test.tsx](app/_ui/__tests__/radio-group.test.tsx) - Grouped components
- [accordion.test.tsx](app/_ui/__tests__/accordion.test.tsx) - Complex composite component

### Best Practices

- **Descriptive Names**: Use clear test descriptions that explain what is being tested
- **User-Centric**: Test from the user's perspective using accessible queries (getByRole, getByLabelText)
- **Isolation**: Each test should be independent and not rely on other tests
- **Coverage**: Aim for high coverage but focus on meaningful tests
- **Async/Await**: Always use `async/await` with userEvent for realistic user interactions
- **Mock Functions**: Use `vi.fn()` to test callbacks and event handlers
- **Cleanup**: Test setup automatically cleans up after each test
