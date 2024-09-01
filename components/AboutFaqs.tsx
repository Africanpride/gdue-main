"use client"
import React from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { LucideChevronDown, LucideChevronRight, LucideMinusCircle, LucidePlusCircle } from 'lucide-react';

type Props = {}

const AboutFaqs = (props: Props) => {
  const faqs = [
    {
      question: "What is GDUE",
      answer:
        "GDUE (Ghanaian Diaspora Union in Europe) is a community organization dedicated to empowering Ghanaians living in Europe through various programs and initiatives. It aims to create a network for friendship, cultural exchange, and professional advancement.",
    },
    {
      question: "How does GDUE empower its members",
      answer:
        "GDUE empowers its members by offering workshops, training sessions, and mentorship opportunities. These initiatives equip members with valuable skills to excel in their careers and provide a platform for their voices to be heard, advocating for their rights and fair treatment.",
    },
    {
      question: "What economic benefits does GDUE provide",
      answer:
        "As a GDUE member, you gain access to business networks, financial literacy programs, and mentorship geared towards financial success. Whether seeking employment or pursuing entrepreneurial ventures, GDUE provides the tools and connections needed to achieve financial goals.",
    },
    {
      question: "How does GDUE foster a sense of community",
      answer:
        "GDUE fosters a strong sense of community by organizing cultural events and celebrations to keep Ghanaian traditions alive and share them with others in Europe. Social gatherings and networking events help members build lasting friendships and feel a sense of belonging.",
    },
    {
      question: "Why should I join GDUE",
      answer:
        "Joining GDUE offers numerous benefits, from professional and economic empowerment to a vibrant social community. Members can build a brighter future together, leveraging the resources and support GDUE provides to thrive in Europe.",
    },
  ];

  return (
    <Accordion className='border border-neutral-300 divide-y  rounded-2xl max-w-4xl mx-auto' transition transitionTimeout={200}>
      {faqs.map(({ question, answer }, i) => (
        <div key={i} className='px-4'>
          <AccordionItem
            header={({ state: { isEnter } }) => (
              <div className='w-full flex items-center justify-between'>
                {isEnter
                  ?
                  <div>
                    <LucideMinusCircle className={`ml-auto transition-transform duration-500 ease-out ${isEnter && "rotate-180"
                      }`} />
                  </div>
                  :
                  <div>
                    <LucidePlusCircle className={`ml-auto transition-transform duration-500 ease-out ${isEnter && "rotate-180"
                      }`} />
                  </div>}

                <div className={' inline-flex items-center gap-x-3 w-full font-semibold text-start  py-4 px-5 hover:text-yellow-600 disabled:pointer-events-none '}>
                  {question}
                </div>
              </div>
            )}

            contentProps={{
              className: "transition-height duration-200 ease-out"
            }}
            panelProps={{ className: "p-4" }}
            className=""
          >
            <div className='px-5 py-4'> {answer}</div>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}

export default AboutFaqs;
