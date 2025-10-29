import { Loader2Icon } from "lucide-react";

import { cn } from "@app/lib/utils";

type SpinnerProps = React.ComponentProps<"svg">;

const Spinner = ({ className, ...props }: SpinnerProps) => {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
};

export { Spinner };
