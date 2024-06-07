"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Akwado from "@/ui/Akwado";
import { bebas, playfair_display } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { ThemeSwitch } from "./theme-switch";

type Props = {};

const NavBar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className="md:py-8">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="md:!px-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <div className=" flex justify-between items-center gap-x-2 ">
            <NavbarBrand className="">
              <Akwado />
            </NavbarBrand>
            <NavbarItem>
              <div className="md:text-md text-sm md:leading-5 px-2 border-s">
                Ghana Diaspora
                <br />
                Union in{" "}
                <span className={`${playfair_display.className}`}>
                  Europe
                </span>{" "}
              </div>
            </NavbarItem>
          </div>
        </NavbarContent>

        <NavbarContent
          className={`${bebas.className} hidden sm:flex gap-x-4 border border-neutral-200 dark:border-neutral-800 px-8 rounded-full  `}
          justify="center"
        >
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-yellow-600"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <div className="pt-1">
            <ThemeSwitch />
          </div>
        </NavbarContent>
        <NavbarContent justify="end">

          <NavbarItem>
            <Link
              className={`${bebas.className} flex items-center gap-x-2 font-medium text-gray-500 hover:text-yellow-600 py-2 md:py-0 md:my-6 md:ps-6 `}
              href="#"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}">
                  <path strokeDasharray="20" strokeDashoffset="{20}" d="M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" />
                  </path>
                  <path strokeDasharray="36" strokeDashoffset="{36}" d="M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z" opacity="0">
                    <set attributeName="opacity" begin="0.5s" to="1" />
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="36;0" />
                  </path>
                </g>
              </svg>
              Membership
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;
