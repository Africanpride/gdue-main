"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Faqs2 from "./Faqs2";

const Faqs = () => {
  const itemClasses = {
    base: "w-full",
    title: "font-bold text-xl",
    // trigger:
    //   "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  return (
    <section
    className=" h-auto md:px-24 md:py-4   mx-auto min-h-[70dvh]
  flex flex-col justify-center items-center space-y-5 text-center "
  >
    <div className="w-full text-4xl p-4 md:text-5xl">FAQS</div>
    <div className=" max-w-4xl pb-8">
      Discover answers to common questions about the{" "}
      <span className="text-yellow-600">
        Ghanaian Diaspora Union   in Europe (GDUE)
      </span>
      , covering membership benefits, empowerment initiatives, community
      events, and economic opportunities for Ghanaians living in Europe.
    </div>
    <div className="max-w-4xl">
      {/* <Faqs /> */}
      <Faqs2 />
    </div>
  </section>
  );
};

export default Faqs;
