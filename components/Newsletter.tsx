import { Library, LucideArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import AnimatedSections from "./AnimatedSections";
import { Button } from "@nextui-org/button";

type Props = {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
    image?: string;
    date?: string;
    author?: string;
    url?: string;
    slug?: string;
    hero?: string;
    featured?: boolean;
    tags?: string[];
    category?: string;
    categories?: string[];
    categorySlug?: string;
    categoryTitle?: string;
    readingTime?: string;
};

const Newsletter = (props: Props) => {
  return (
    <div>
      <AnimatedSections className="w-full text-[16px] ">
        <div className="lg:max-w-none  mt-22 mx-auto sm:mt-30">
          <div
            className="-mx-6 md:rounded-6xl bg-blue-900 px-6 py-12 sm:mx-0 sm:py-24 md:px-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <div className="mx-auto max-w-5xl divide-y divide-neutral-300/25 space-y-8  ">

              <div className="max-w-2xl space-y-5 ">
                <h2 className="font-display text-3xl  text-white [text-wrap:balance] sm:text-4xl">
                Join the Ghanaian Diaspora Union in Europe (GDUE)!
                </h2>
                <p className="text-md text-white">
                Unite with fellow Ghanaians in Europe to build lasting friendships, share cultural experiences, and advance your career. Empower yourself with the GDUE network today!
                </p>
                <div className="mt-6 flex">
                <Link href={'/join'}>
                <Button className='uppercase rounded-full' size={'md'} color="warning" variant="solid"
                endContent={<LucideArrowUpRight className='bg-primary rounded-full  text-white' />}>
                        <span className='text-sm'>Click Here to Join GDUE</span>
                    </Button>
                </Link>
                  {/* <Link
                    className="inline-flex items-center rounded-full px-4 py-1.5 space-x-3 text-sm font-semibold transition bg-warning text-black hover:bg-warning/70"
                    href="/join"
                  >
                    <span className="relative top-px">Click Here to Join GDUE</span>
                    <span>
                      <Library className="text-current h-5 w-5" />
                    </span>
                  </Link> */}
                </div>

              </div>

              <div className="pt-6">
                <h3 className="font-display  text-2xl  text-white">
                  Our Office
                </h3>
                <ul
                  role="list"
                  className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2"
                >
                  <li>
                    <address className="text-sm not-italic text-neutral-100">
                      <strong className="text-white text-lg">&#x2014; Spain</strong><br />
                      Calle Río sella, 43 Bajo izquierda,<br /> 33010
                      Oviedo, Spain,<br />+34 624490895
                    </address>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </AnimatedSections>
    </div>
  );
};

export default Newsletter;
