"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP);


type Props = {};

const Gsap: React.FC<Props> = () => {
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

  return <div ref={myRef}>
    Welcome to the GDUE News section! Here, you'll find the latest updates and insights on events, initiatives, and community engagements from the Ghanaian Diaspora Union in Europe. Stay informed about our advocacy efforts, cultural celebrations, educational programs, and economic empowerment initiatives.
  </div>;
};

export default Gsap;
