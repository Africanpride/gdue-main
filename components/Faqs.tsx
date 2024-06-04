"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

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
    <Accordion
      selectionMode="multiple"
      className="md:w-4/5  min-w-3xl "
      variant="splitted"
      itemClasses={itemClasses}
    >
      <AccordionItem
        className=""
        key="1"
        aria-label="What is GDUE?"
        title="What is GDUE?"
      >
        <div className="">
          GDUE (Ghana Diaspora Union in Europe) is a community organization
          dedicated to empowering Ghanaians living in Europe through various
          programs and initiatives. It aims to create a network for friendship,
          cultural exchange, and professional advancement.
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="How does GDUE empower its members?"
        title="How does GDUE empower its members?"
      >
        <div className="">
          GDUE empowers its members by offering workshops, training sessions,
          and mentorship opportunities. These initiatives equip members with
          valuable skills to excel in their careers and provide a platform for
          their voices to be heard, advocating for their rights and fair
          treatment.
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="What economic benefits does GDUE provide?"
        title="What economic benefits does GDUE provide?"
      >
        <div className="">
          As a GDUE member, you gain access to business networks, financial
          literacy programs, and mentorship geared towards financial success.
          Whether seeking employment or pursuing entrepreneurial ventures, GDUE
          provides the tools and connections needed to achieve financial goals.
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="How does GDUE foster a sense of community?"
        title="How does GDUE foster a sense of community?"
      >
        <div className="">
          GDUE fosters a strong sense of community by organizing cultural events
          and celebrations to keep Ghanaian traditions alive and share them with
          others in Europe. Social gatherings and networking events help members
          build lasting friendships and feel a sense of belonging.
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Why should I join GDUE?"
        title="Why should I join GDUE?"
      >
        <div className="">
          Joining GDUE offers numerous benefits, from professional and economic
          empowerment to a vibrant social community. Members can build a
          brighter future together, leveraging the resources and support GDUE
          provides to thrive in Europe.
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Faqs;
