import React from "react";

import { cn } from "@/app/lib/utils";

const styled = <T extends { className?: string } & unknown>(
  Component: React.FunctionComponent<T>,
) => {
  return function StyledComponent({ ...props }: T) {
    const { className } = props;

    return <Component {...props} className={cn("sl-test", className)} />;
  };
};

export { styled };
