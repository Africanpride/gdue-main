"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from 'react-responsive'



type Props = {};

export default function Gsap(props: Props) {
  const isDesktopOrLaptop = useMediaQuery(
    { minDeviceWidth: 1224 },
    { deviceWidth: 1600 } 
  )

  const myRef = useRef<HTMLDivElement>(null); // Correctly typed

  useGSAP(() => {
    const tl = gsap.timeline();
    if (myRef.current) { // Check if the reference is not null
      tl.from(myRef.current, {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.inOut",
      });
    }
  }, { scope: myRef });

  return (
    <>
      <div className="font-poppins" ref={myRef}>
        Welcome to the GDUE News section! Here, you'll find the latest updates and insights on events, initiatives, and community engagements from the Ghanaian Diaspora Union in Europe. Stay informed about our advocacy efforts, cultural celebrations, educational programs, and economic empowerment initiatives.
      </div>
      <div>
        {!isDesktopOrLaptop && (
          <p>
            this will always get rendered even if device is shorter than 1224px,
            that's because we overrode device settings with 'deviceWidth: 1600'.
          </p>
        )}
      </div>
    </>
  )
};


