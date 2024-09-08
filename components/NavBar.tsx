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
import { motion } from "framer-motion";
import { LucideArrowUpRight } from "lucide-react";


type Props = {};

const NavBar = (props: Props) => {

  // media query for mobile etc
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // console.log(isMobile);

  const pathname = usePathname();
  const { user } = useUser();

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="md:py-8">

      <NavbarContent justify="start" className="md:!px-0">
        <NavbarBrand >
          <div className="flex justify-between items-center gap-x-2">
            <Link href={'/'}>
              <NavbarItem className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <MainLogo />
                </motion.div>
                <div className={`hidden md:block md:text-md text-sm md:leading-4 px-2 border-s`}>
                  Ghanaian Diaspora
                  <br />
                  Union in{" "}
                  <span className={`${playfair_display.className}`}>
                    Europe
                  </span>{" "}
                </div>
              </NavbarItem>
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className={`${bebas.className} hidden sm:flex gap-x-4 border border-neutral-300/70
           dark:border-neutral-800 px-8 rounded-full`}
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
            <Link href={'/join'}>
              <Button className='uppercase rounded-none' size={isTabletOrMobile ? 'sm' : 'lg'} color="secondary" variant="solid"
                endContent={<LucideArrowUpRight className='bg-warning  text-white' />}>
                <span className='text-lg'>Join GDUE</span>
              </Button>
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
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col items-start justify-center h-auto pt-[20%]
">

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { y: 20 },
              visible: {

                y: 0,
                transition: {
                  ease: "easeOut",
                  duration: 2,
                  staggerChildren: 0.5,
                },
              },
            }}


            className="space-y-2 font-poppins font-extrabold uppercase italic "

          >
            {siteConfig.navItems.map((item, index) => (
              <motion.li
                key={`${item}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}

              >
                <Link
                  onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    {
                      "data-[active=true]:text-primary data-[active=true]:font-bold hover:text-yellow-600 text-lg": true,
                      "text-yellow-600": pathname === item.href
                    }
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </motion.li>

            ))}
          </motion.ul>
        </div>
      </NavbarMenu>

    </Navbar>
    // <div className="md:py-8">
    // </div>
  );
};

export default NavBar;