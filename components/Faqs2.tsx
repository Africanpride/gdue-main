"use client";
import React from "react";

type Props = {};

const faqs = [
  {
    question: "What is GDUE?",
    answer:
      "GDUE (Ghana Diaspora Union in Europe) is a community organization dedicated to empowering Ghanaians living in Europe through various programs and initiatives. It aims to create a network for friendship, cultural exchange, and professional advancement.",
  },
  {
    question: "How does GDUE empower its members?",
    answer:
      "GDUE empowers its members by offering workshops, training sessions, and mentorship opportunities. These initiatives equip members with valuable skills to excel in their careers and provide a platform for their voices to be heard, advocating for their rights and fair treatment.",
  },
  {
    question: "What economic benefits does GDUE provide?",
    answer:
      "As a GDUE member, you gain access to business networks, financial literacy programs, and mentorship geared towards financial success. Whether seeking employment or pursuing entrepreneurial ventures, GDUE provides the tools and connections needed to achieve financial goals.",
  },
  {
    question: "How does GDUE foster a sense of community?",
    answer:
      "GDUE fosters a strong sense of community by organizing cultural events and celebrations to keep Ghanaian traditions alive and share them with others in Europe. Social gatherings and networking events help members build lasting friendships and feel a sense of belonging.",
  },
  {
    question: "Why should I join GDUE?",
    answer:
      "Joining GDUE offers numerous benefits, from professional and economic empowerment to a vibrant social community. Members can build a brighter future together, leveraging the resources and support GDUE provides to thrive in Europe.",
  },
];

const Faqs2 = (props: Props) => {
  return (
    <div className="hs-accordion-group">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`hs-accordion ${index === 0 ? "active" : ""} bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-950 dark:border-neutral-900 text-left`}
          id={`hs-bordered-heading-${index}`}
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-yellow-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-yellow-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
            aria-controls={`hs-basic-bordered-collapse-${index}`}
          >
            <svg
              className="hs-accordion-active:hidden block size-3.5"
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hidden size-3.5"
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
              <path d="M5 12h14" />
            </svg>
            {faq.question}
          </button>
          <div
            id={`hs-basic-bordered-collapse-${index}`}
            className={`hs-accordion-content ${index === 0 ? "w-full overflow-hidden transition-[height] duration-300" : "hidden w-full overflow-hidden transition-[height] duration-300"}`}
            aria-labelledby={`hs-bordered-heading-${index}`}
          >
            <div className="p-6">
              <p className="text-gray-800 dark:text-neutral-200">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs2;
