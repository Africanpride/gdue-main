"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { bebas } from "@/config/fonts";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  heading?: string | React.ReactNode;
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
      <span className="text-yellow-800 ">Ghana diasporan</span> community.
    </>
  ),
  linkText = "Watch our story",
  linkHref = "#",
  backgroundImage = "/images/festival2.jpg",
  hideVideo = false
}: Props) => {
  const pathname = usePathname();
  const currentUrl = pathname.replace('/', '');

  const descriptionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const currentUrlCharRef = useRef<HTMLDivElement>(null);

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
      },">-0.5");
    }
  });



  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span ref={currentUrlCharRef} key={index} className="inline-block">
        {char}
      </span>
    ));
  };

  return (
    <section className="">
      <div className="mx-auto">
        <div className={`min-h-[35vh] h-auto md:min-h-[80vh] 
         flex flex-col justify-center items-start relative md:rounded-6xl overflow-hidden`}
        >
          <Image
            data-image
            priority
            src={backgroundImage}
            width={1728}
            height={650}
            // style={{
            //   width: '100%',
            //   height: 'fit-content',
            // }}
            alt={linkText}
            className="absolute grayscale saturate-150 bg-bottom bg-cover bg-no-repeat "
          />
          <div className=" text-[9vw] px-8 gap-x-2 text-yellow-600 opacity-75 dark:opacity-55 uppercase font-extrabold font-poppins  ">
            {splitText(currentUrl)}
          </div>
          <div className="hidden md:block absolute bottom-0 top-0 start-0 end-0 max-w-md text-center mx-auto p-3 md:start-auto md:text-start md:mx-0">
            <div className="px-5 py-4 inline-block h-full bg-white rounded-4xl rounded-tr-[3.5rem] rounded-ee-[3.5rem] md:p-7 dark:bg-yellow-700">
              <div>
                <h3 ref={headerRef} className={`${bebas.className} tracking-wide text-md font-bold text-gray-800 sm:text-xl dark:text-neutral-200`}>
                  {heading}
                </h3>
                <p ref={descriptionRef} className="mt-2 text-gray-800 dark:text-neutral-200 text-medium ">
                  {description}
                </p>
              </div>
              <div className={`hidden md:mt-16 `}>
                <Link
                  href={linkHref}
                  className={`${hideVideo ? 'hidden' : 'flex'} items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-neutral-400`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
