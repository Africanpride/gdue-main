import React from "react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";
import Akwado from "@/ui/Akwado";
import { playfair_display } from "@/config/fonts";

type Props = {};

const NavBar2 = (props: Props) => {
  return (
    <div className="pt-5">
      {/* ========== HEADER ========== */}
      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-neutral-800 dark:border-neutral-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
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
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  className="py-3 ps-px md:px-3 font-medium text-blue-600 dark:text-blue-500"
                  href={item.href}
                  aria-current="page"
                >
                  {item.label}
                </Link>
              ))}

              <div className="inline-block pr-5 pt-1">
                <ThemeSwitch />
              </div>

              <a
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 py-2 md:py-0 md:my-6 md:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Membership
              </a>
            </div>
            
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </div>
  );
};

export default NavBar2;
