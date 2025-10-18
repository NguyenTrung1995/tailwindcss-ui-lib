import React, { useState } from "react";

import { MenuList } from "./menu-list";
import { MenuItemType } from "./types";

type MenuItemProps = React.ComponentProps<"div"> & {
  item: MenuItemType;
};

const MenuItem = ({ item, ...props }: MenuItemProps) => {
  const hasChildren = Boolean(item.children?.length);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...props}>
      <p
        className="inline-flex gap-2 cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span>{item.label}</span>
        <span>{hasChildren ? (isOpen ? "-" : "+") : null}</span>
      </p>
      {hasChildren && isOpen && <MenuList list={item.children ?? []} />}
    </div>
  );
};

export { MenuItem };
