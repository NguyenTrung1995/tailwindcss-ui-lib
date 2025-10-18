import React from "react";

import { MenuItem } from "./menu-item";
import type { MenuItemType } from "./types";

type MenuListProps = React.ComponentProps<"div"> & {
  list: MenuItemType[];
};

const MenuList = ({ list, ...props }: MenuListProps) => {
  return (
    <div {...props} className="py-2 px-4">
      {list.map((item) => (
        <MenuItem key={item.to} item={item} />
      ))}
    </div>
  );
};

export { MenuList };
