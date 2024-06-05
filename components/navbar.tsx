import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { Facebook, FacebookIcon, Twitter } from "lucide-react";
import Image from "next/image";
import {
  bebas,
  ibm_plex_sans_condense,
  inter,
  montserrat,
  playfair_display,
  poppins,
  sourceCodePro400,
  sourceCodePro700,
} from "@/config/fonts";
import Akwado from "@/ui/Akwado";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <div
      className="fixed w-full z-30 top-0 bg-white dark:bg-black  md:border-b border-neutral-300 
     dark:border-neutral-800/50"
    >
      <div className="container mx-auto  h-auto md:h-[20dvh]  flex flex-col justify-center w-full ">
        <div className="flex justify-between items-center px-5">
          <div className="hidden md:flex justify-start items-center divide-x gap-x-5">
            <Akwado />
            <div className="px-5">
              <div className="text-lg font-bold leading-5  ">
                <span className={` font-normal`}>
                  {" "}
                  Ghana Diaspora Union <br />
                  in{" "}
                  <span className={`${playfair_display.className}`}>
                    Europe
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            {" "}
            <NextUINavbar
              maxWidth="xl"
              position="sticky"
              className={`uppercase ${bebas.className} tracking-wide font-thin text-md container mx-auto  border  border-neutral-300/70 dark:border-neutral-800/70 shadow-sm h-full w-full bg-neutral-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10  dark:bg-black md:rounded-full `}
            >
              <NavbarContent
                className={`font-bold basis-1/5 sm:basis-full" justify="start`}
              >
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                  {/* <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">GDUE</p>
            </NextLink> */}
                </NavbarBrand>

                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                  {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                      <NextLink
                        className={clsx(
                          linkStyles({ color: "foreground" }),
                          "data-[active=true]:text-primary data-[active=true]:font-medium"
                        )}
                        color="foreground"
                        href={item.href}
                      >
                        {item.label}
                      </NextLink>
                    </NavbarItem>
                  ))}
                </ul>
              </NavbarContent>

              <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
              >
                {/* <NavbarItem className="hidden sm:flex gap-2">

          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>

        </NavbarItem> */}

                {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
                <NavbarItem className="hidden md:flex items-center">
                  <Button
                    isExternal
                    as={Link}
                    className={` text-sm font-bold  bg-default-100`}
                    href={siteConfig.links.membership}
                    startContent={
                      <Image
                        alt="Ghana"
                        src={"/images/ghana.svg"}
                        width={30}
                        height={30}
                      />
                    }
                    variant="flat"
                  >
                    Membership
                  </Button>
                </NavbarItem>
                {/* <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.membership}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Donate
            </Button>
          </NavbarItem> */}
                <ThemeSwitch />
              </NavbarContent>


              <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                  {siteConfig.navMenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                      <Link
                        color={
                          index === 2
                            ? "primary"
                            : index === siteConfig.navMenuItems.length - 1
                              ? "danger"
                              : "foreground"
                        }
                        href="#"
                        size="lg"
                      >
                        {item.label}
                      </Link>
                    </NavbarMenuItem>
                  ))}
                </div>
              </NavbarMenu>
            </NextUINavbar>
          </div>
        </div>
      </div>
    </div>
  );
};
