"use client";

import Image from "next/image";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

const menuContent = [
  {
    id: 1,
    text: "關於我們",
  },
  {
    id: 2,
    text: "醫療地圖",
  },
  {
    id: 3,
    text: "イベント情報",
  },
  {
    id: 4,
    text: "軌跡",
  },
  {
    id: 5,
    text: "お問い合わせ",
  },
];

export const LayoutNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMenuActive, setMenuActive] = React.useState(2);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            priority
            alt="TAIPAN Logo"
            height={200}
            src="/Logo.png"
            style={{ width: "auto", height: "auth" }}
            width={200}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-3" justify="center">
        {menuContent.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              color={item.id == isMenuActive ? "primary" : "foreground"}
              href="#"
              onClick={() => setMenuActive(item.id)}
            >
              {item.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            會員登入
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuContent.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              className="w-full"
              color={item.id == isMenuActive ? "primary" : "foreground"}
              href="#"
              size="lg"
              onClick={() => setMenuActive(item.id)}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
