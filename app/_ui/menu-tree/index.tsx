import React from "react";

import { MenuList } from "./menu-list";
import type { MenuItemType } from "./types";

const data: MenuItemType[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/profile/details",
        children: [
          {
            label: "Location",
            to: "/profile/details/location",
            children: [
              {
                label: "City",
                to: "/profile/details/location/city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "/settings/account",
      },
      {
        label: "Security",
        to: "/settings/security",
        children: [
          {
            label: "Login",
            to: "/settings/security/login",
          },
          {
            label: "Register",
            to: "/settings/security/register",
            children: [
              {
                label: "Random Data",
                to: "/settings/security/register/random-data",
              },
            ],
          },
        ],
      },
    ],
  },
];

const TreeMenu = () => {
  return (
    <div className="bg-green-500 h-screen">
      <MenuList list={data} />
    </div>
  );
};

export { TreeMenu };
