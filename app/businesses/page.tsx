"use client"
import { useAnimationContext } from "@/components/AnimationContext";
import Jumbotron from "@/components/Jumbotron";
import React, { useEffect, useRef } from "react";


type Props = {};

const BusinessPage = (props: Props) => {
  const { observe } = useAnimationContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      observe(sectionRef.current);
    }
  }, [observe]);

  return (
    <div className="md:space-y-16">

      <Jumbotron
        heading="Diasporan Business Directory"
        description={(<>  Explore our Diasporan Business Directory showcasing diverse businesses owned by  {" "}
          <span className="text-yellow-600 font-bold">
          Ghanaians in the diaspora. 
          </span>{" "}
          Support community entrepreneurship. {" "}
          </>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/market.jpg"
        hideVideo={false}
      />
      <div ref={sectionRef} className={`text-4xl font-bold`}>More information coming soon ...</div>
    </div>
  );
};

export default BusinessPage;
