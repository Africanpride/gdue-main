"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { bebas, playfair_display } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import {
  SignedIn,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import { usePathname } from 'next/navigation';
import RegistrationModal from './RegistrationModal';
import MainLogo from "@/ui/GDUELogo";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";


type Props = {};

const NavBar = (props: Props) => {

  // media query for mobile etc
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const pathname = usePathname();
  const { user } = useUser();

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="md:py-8">

      <NavbarContent justify="start" className="md:!px-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <div className="flex justify-between items-center gap-x-2">
          <NavbarBrand>
            <NavbarItem className="flex items-center">
              <MainLogo />
              <div className={`hidden md:block md:text-md text-sm md:leading-4 px-2 border-s`}>
                Ghanaian Diaspora
                <br />
                Union in{" "}
                <span className={`${playfair_display.className}`}>
                  Europe
                </span>{" "}
              </div>
            </NavbarItem>
          </NavbarBrand>
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
                  "text-yellow-600": pathname === item.href // Highlight active link
                }
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div
            className={`${bebas.className} flex items-center gap-x-2 font-medium text-gray-500 hover:text-yellow-600 py-2 md:py-0 md:my-6 md:ps-6`}
          >
              <Link href={'/join'} >
                <Button size="sm" color="warning" className='text-[14px] text-white'>Join GDUE</Button>
              </Link>

            {/* <SignedOut>
              <SignInButton>
                <div className="text-sm cursor-pointer flex items-center">
                  <LucideUser />
                  <span className="ps-2">Login/Sign Up</span>
                </div>
              </SignInButton>
            </SignedOut> */}
            <SignedIn>
              <div className="flex items-center divide-x gap-x-2">
                <UserButton />
                <div className="ps-2">
                  <NextUILink className="text-current hover:text-yellow-600" href="/dashboard">
                    My Dashboard
                  </NextUILink>
                </div>
              </div>
            </SignedIn>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={item.href}
              className={`${pathname === item.href ? 'text-danger-600' : 'text-primary'} `}
              onClick={handleMenuItemClick} // Add onClick handler
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    // <div className="md:py-8">
    // </div>
  );
};

export default NavBar;
