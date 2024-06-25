"use client"
import React from "react";
import Link from "next/link";
import {
  bebas,
  ibm_plex_sans_condense,
  playfair_display,
  poppins,
} from "@/config/fonts";
import { usePathname } from 'next/navigation';  // Import usePathname


type Props = {
  heading?: string;
  description?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  backgroundImage?: string;
  hideVideo?: boolean;
};


const Jumbotron = ({
  heading = "Share Your Business?",
  description = (
    <>
      Learn more about sharing your business with the{" "}
      <span className="text-yellow-600 ">Ghana diasporan</span> community.
    </>
  ),
  linkText = "Watch our story",
  linkHref = "#",
  backgroundImage = "/images/festival2.jpg",
  hideVideo =false
}: Props) => {
  const pathname = usePathname();  // Get the current path
  const currentUrl = pathname.replace('/','');

  return (
    <section className="">
      {/* Features */}
      <div className="mx-auto">
        <div
          className={`min-h-[35vh] h-auto md:min-h-[75vh] grayscale saturate-150	 flex flex-col justify-center items-start bg-bottom bg-cover bg-no-repeat relative md:rounded-6xl overflow-hidden`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={`text-[9dvw] gap-x-2 opacity-75 dark:opacity-55 uppercase  
           text-default-900 px-8 font-extrabold ${poppins.className}`}>
            {currentUrl}
          </div>
          <div className="hidden md:block absolute bottom-0 start-0 end-0 max-w-md text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
            {/* Card */}
            <div className="px-5 py-4 inline-block bg-white rounded-4xl md:p-7 dark:bg-neutral-900">
              <div>
                <h3 className={`${bebas.className} tracking-wide text-md font-bold text-gray-800 sm:text-xl dark:text-neutral-200`}>
                  {heading}
                </h3>
                <p className="mt-2 text-gray-800 dark:text-neutral-200 text-sm">
                  {description}
                </p>
              </div>
              <div className={`hidden md:mt-16 `}>
                <Link
                  href={linkHref}
                  className={`${hideVideo ? 'hidden': 'flex'}  items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-neutral-400`}
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
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  {linkText}
                </Link>
              </div>
            </div>
            {/* End Card */}
          </div>
        </div>
      </div>
      {/* End Features */}
    </section>
  );
};

export default Jumbotron;
