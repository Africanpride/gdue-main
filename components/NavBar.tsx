"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
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
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs'
import { LucideUser } from "lucide-react";
import { usePathname } from 'next/navigation';  // Import usePathname

type Props = {};

const NavBar = (props: Props) => {
  const { user } = useUser();
  const pathname = usePathname();  // Get the current path

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
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
        <NavbarContent justify="start" className="md:!px-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <div className="flex justify-between items-center gap-x-2">
            <NavbarBrand>
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
          className={`${bebas.className} hidden sm:flex gap-x-4 border border-neutral-200 dark:border-neutral-800 px-8 rounded-full`}
          justify="center"
        >
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  {
                    "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-yellow-600": true,
                    "text-yellow-600": pathname === item.href  // Highlight active link
                  }
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
            <div
              className={`${bebas.className} flex items-center gap-x-2 font-medium text-gray-500 hover:text-yellow-600 py-2 md:py-0 md:my-6 md:ps-6`}
            >
              <SignedOut>
                <SignInButton>
                  <div className="text-sm cursor-pointer flex items-center">
                    <LucideUser />
                    <span className="ps-2">Membership</span>
                  </div>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center divide-x gap-x-2">
                  <UserButton />
                  <div className="ps-2">
                    <NextUILink className="text-current hover:text-yellow-600" href="/dashboard">My Dashboard</NextUILink>
                  </div>
                </div>
              </SignedIn>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextUILink
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
              </NextUILink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;
