// eslint-disable-next-line @next/next/no-img-element
"use client"
import React, { useRef } from "react";
import Link from "next/link";
import {
  bebas
} from "@/config/fonts";
import { usePathname } from 'next/navigation';  // Import usePathname
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedSections from "./AnimatedSections";
import Image from "next/image";


type Props = {
  heading?: string;
  description?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  backgroundImage?: string;
  hideVideo?: boolean;
};


const JumbotronHome = ({ heading = "Share Your Business?",
  description = (
    <>
      Learn more about sharing your business with the{" "}
      <span className="text-yellow-600 ">Ghana diasporan</span> community.
    </>
  ),
  linkText = "Watch our story",
  linkHref = "#",
  backgroundImage = "/images/african3.jpg",
  hideVideo = false
}: Props) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();  // Get the current path
  const currentUrl = pathname.replace('/', '');

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate header
    if (headerRef.current) {
      tl.from(headerRef.current, {
        duration: 0.9,
        opacity: 0,
        x: 10,
        ease: "power2.inOut"
      });
    }

    // Animate description
    if (descriptionRef.current) {
      tl.from(descriptionRef.current, {
        duration: 0.9,
        opacity: 0,
        y: 10,
        ease: "power2.inOut"
      }, ">-0.5");
    }
  });



  return (
    <AnimatedSections>
      {/* Features */}
      <div className="mx-auto py-3">
        <div
          className={`min-h-[90dvh] rounded-2xl h-auto md:min-h-[85vh] flex flex-col justify-center items-start bg-bottom bg-cover bg-no-repeat relative md:rounded-6xl overflow-hidden`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "top center",
            backgroundSize: "fit-content"
          }}
        >
          <div className={`text-[7dvw] gap-x-2 opacity-65 dark:opacity-55 uppercase   
           text-default-900 px-2 md:px-8 font-extrabold font-poppins`}>
            {currentUrl}
          </div>
          <div className="hidden md:block absolute bottom-0 start-0 end-0 max-w-md text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
            {/* Card */}
            <div className="px-5 py-4 inline-block bg-white rounded-4xl md:p-7 dark:bg-neutral-900">
              <div>
                <div ref={headerRef} className={`${bebas.className} tracking-wide text-md font-bold text-gray-800 sm:text-lg dark:text-neutral-200`}>
                  <div className="flex items-center gap-x-2">
                    <span>{heading}</span> 
                  <span><Image className="w-7 h-4 mb-1" src={'/images/gh2.png'} alt="background" width={1000} height={500} /></span>
                  </div>

                </div>
                <p ref={descriptionRef} className="mt-2 text-gray-800 dark:text-neutral-200 text-sm">
                  {description}
                </p>
              </div>
              <div className={`hidden md:mt-16 `}>
                <Link
                  href={linkHref}
                  className={`${hideVideo ? 'hidden' : 'flex'}  items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-neutral-400`}
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
    </AnimatedSections>
  );
};

export default JumbotronHome;
